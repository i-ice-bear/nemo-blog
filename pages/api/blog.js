import * as fs from "fs";

export default async function handleClick(req, res) {
  let data = await fs.promises.readdir("json");
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const items = data[index];
    console.log(items);
    myfile = await fs.promises.readFile("json/" + items, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }
  res.status(200).json(allBlogs);
}
