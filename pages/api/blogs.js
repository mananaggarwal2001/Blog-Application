// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { typescript } from '@/next.config';
import * as fs from 'fs'
export default async function handler(req, res) {
  let data = await fs.promises.readdir('blogData');
  data = data.slice(0, Number.parseInt(req.query.count))
  console.log(data.length);
  let allBlogs = []
  let eachResult;


  try {
    for (let index = 0; index < data.length; index++) {
      eachResult = await fs.promises.readFile(`blogData/${data[index]}`, 'utf-8')
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
