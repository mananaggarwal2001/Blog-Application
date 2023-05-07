import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import Link from 'next/link'
import * as fs from 'fs'
// step1: collect all the files from the blog data directory
// step2: Iterate through them and display them in the given blog directory.

const blog = (props) => {

  console.log(props)
  const [Blogs, setBlogs] = useState(props.allBlogs)
  const [count, setcount] = useState(2)
  const fetchMoreData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs?count=${count + 2}`)
    console.log(count)
    setcount(count+2)
    let result = await d.json()
    setBlogs(result)
  };

  return (
    <>
      <style>
        {`
        .container{
          margin: 10px 0px;
        }
        .popularBlogs{
          text-align:center;
          margin-top: 30px;
          margin-bottom: 10px;
          font-family:cursive;
        }
        .headingClass{
          margin-bottom: 12px;
          font-family: cursive;
          font-size:20px;
          text-decoration:none;
          cursor:pointer;
          color:black;

        }
        .headingClass:hover{
          text-decoration:underline;

        }
        .paragraphTagline{
          font-family: cursive;
          font-size: 18px;
        }
        .container{
          color:black;

        }
        .LinkClass{
          text-decoration:none;
        }
      `}
      </style>
      <div> <h2 className='popularBlogs'>Popular Blogs</h2>
        <div className={styles.grid}>
          <InfiniteScroll
            dataLength={Blogs.length} //This is important field to render the next data
            next={fetchMoreData}
            hasMore={props.allcount !== Blogs.length}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {Blogs.map((blogitem) => {
              return (
                <div className="container" key={blogitem.slug}>
                  <Link className='LinkClass' href={`./blogPosts/${blogitem.slug}`}>
                    <h3 className='headingClass'>{blogitem.title}</h3>
                  </Link>
                  <p className='paragraphTagline'>{blogitem.content.substr(0, 90)}...</p>
                </div>
              )
            })}
          </InfiniteScroll>

        </div>
      </div>
    </>
  )
}


export async function getStaticProps(context) {
  const resultData = await fs.promises.readdir('blogData');
  let allcount = resultData.length;
  let allBlogs = []
  let eachResult;

  try {
    for (let index = 0; index < 2; index++) {
      eachResult = await fs.promises.readFile(`blogData/${resultData[index]}` , 'utf-8')
      allBlogs.push(JSON.parse(eachResult))
    }
  } catch (error) {
    console.log(error.message)
  }

  return {
    props: { allBlogs, allcount }
  }
}

// export async function getServerSideProps(context) {
//   let data = await fetch('http://localhost:3000/api/blogs');
//   let allBlogs = await data.json()
//   return {
//     props: {allBlogs}
//   }
// }

export default blog