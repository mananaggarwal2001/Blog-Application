// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'
// http://localhost:3000/api/getblog?slug=how-to-learn-javascript
export default function handler(req, res) {
  try {

    fs.readFile(`blogData/${req.query.slug}.json`, 'utf-8', (error, result) => {
      try {

        console.log(result)
        const parsedJsonData = JSON.parse(result)
        res.status(200).json({ parsedJsonData })
      } catch (error) {
        res.status(500).json({ parsedResult: 'Internal Server Error' })
        console.log(error.message)
      }
    })
  } catch (error) {
    res.status(500).json({ result: 'Internal Server Error' })
    console.log(error.message)
  }
}
