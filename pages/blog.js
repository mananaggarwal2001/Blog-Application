import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import * as fs from 'fs'
// step1: collect all the files from the blog data directory
// step2: Iterate through them and display them in the given blog directory.

const blog = (props) => {

  console.log(props)
  const [Blogs, setBlogs] = useState(props.allBlogs)

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
          {Blogs.map((blogitem) => {
            return (
              <div className="container" key={blogitem.slug}>
                <Link className='LinkClass' href={`./blogPosts/${blogitem.slug}`}>
                  <h3 className='headingClass'>{blogitem.title}</h3>
                </Link>
                <p className='paragraphTagline'>{blogitem.content.substr(0,90)}...</p>
              </div>
            )
          })}

        </div>
      </div>
    </>
  )
}


export async function getStaticProps(context) {
  const resultData = await fs.promises.readdir('blogData');
  let allBlogs = []
  let parsedBlogs = []
  let eachResult;

  try {
    for (let index = 0; index < resultData.length; index++) {
      eachResult = await fs.promises.readFile(`blogData/${resultData[index]}`, 'utf-8')
      allBlogs.push(JSON.parse(eachResult))
    }
  } catch (error) {
    console.log(error.message)
  }

  return {
    props:{allBlogs}
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