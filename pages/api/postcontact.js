import * as fs from 'fs'
export default async function handler(req, res) {
    if (req.method == 'POST') {
        console.log(req.body)
        let result = await fs.promises.readdir('contactData');
        fs.writeFileSync(`contactData/${result.length+1}.json`, JSON.stringify(req.body), ()=>{});
        res.status(200).json('file is created sucessfully in the given folder')
    } else {
        res.status(200).json('all blogs in the coming direction for getting the number of blogs .')
    }
}