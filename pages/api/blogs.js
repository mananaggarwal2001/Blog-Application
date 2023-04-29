// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { typescript } from '@/next.config';
import * as fs from 'fs'
export default async function handler(req, res) {

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
  res.status(200).send(allBlogs)

  // fs.readdir('blogData', (err, result) => {
  //   let allBlogs= []
  //   result.forEach((item) => {
  //     fs.readFile(`blogData/${item}`, 'utf-8', (error, result) => {
  //       allBlogs.push(result)

  //     })
  //   })
  //   res.send(allBlogs)
  // })
}
