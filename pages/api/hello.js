import * as fs from 'fs';

export default function handlerData(req,res){
  fs.readFile(`json/${req.query.slug}.json`,"utf-8", (err, data)=>{
    if (err){
      fs.readFile(`error/error.json`,"utf-8", (err, data)=>{
        res.status(200).json(JSON.parse(data))
      })
    }else{
      res.status(300).json(JSON.parse(data))
    }
  })
}
