import React, { useEffect, useState, useEffectX, useLayoutEffect } from 'react'
import { useRouter } from 'next/router'
//step 1:  find the file corresponding to the slug
// Step 2: populate them with the respective urls given in the blogs website as when the user click then it will redirect to that webpage of the blog for reading the blog.
const slug = () => {
    const [blog, setBlog] = useState({
        title: 'default',
        content: 'default',
        author: 'default',
        slug: 'default'
    })
    const router = useRouter()
    useEffect(() => {
        if (!router.isReady)
            return;

        const { slug } = router.query;
        fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then(result => {
            return result.json()
        }).then((result2) => {
            console.log(result2)
            console.log("this is the result for the particular project.")
            setBlog({
                title: result2.title,
                content: result2.content,
                author: result2.author,
                slug:result2.slug
            })
        })

    }, [router.isReady]) // if the router is ready then run the useEffect hook again for doing the further operations on the given blog.


    return (
        <>
            <style>
                {
                    `
                        .container{
                            width: 66%;
                            display:flex;
                            flex-direction:column;
                            align-items:center;
                            justify-items:center;
                            font-family:cursive;
                        }
                        .centerContainer{
                            display:flex;
                            justify-content:center;
                        }
                        .headingoftheBlog{
                            font-size: 30px;
                            margin: 20px 0;
                            font-weight: bolder;
                        }
                    `
                }
            </style>
            <div className='centerContainer'>
                <div className='container'>
                    <h1 className='headingoftheBlog'>{blog && blog.title}</h1>
                    <hr />
                    <div>
                        {console.log(blog && blog.content)}
                        {blog && blog.content}
                    </div>
                </div>
            </div>
        </>
    )
}

export default slug