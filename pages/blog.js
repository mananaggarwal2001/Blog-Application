import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
// step1: collect all the files from the blog data directory
// step2: Iterate through them and display them in the given blog directory.

const blog = () => {

  const [Blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/api/blogs').then((result) => {
      return result;
    }).then((finalResult) => {
      return finalResult.json()
    }).then((displayResult) => {
      setBlogs(displayResult)
    })
  }, [])

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
              <div className="container">
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

export default blog