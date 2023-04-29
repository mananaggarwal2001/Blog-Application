import React from 'react'
import { useRouter } from 'next/router'
//step 1:  find the file corresponding to the slug
// Step 2: populate them with the respective urls given in the blogs website as when the user click then it will redirect to that webpage of the blog for reading the blog.
const slug = () => {
    const router = useRouter()
    const { slug } = router.query;
    console.log(slug);
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
                    <h1 className='headingoftheBlog'>{slug}</h1>
                    <hr />
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ea pariatur explicabo dolores accusantium voluptatem. Distinctio velit magnam necessitatibus ut fugiat pariatur eius.
                    </div>
                </div>
            </div>
        </>
    )
}

export default slug