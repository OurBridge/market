import fs from "fs";
import path from "path";

async function get(req, res) {
  const { city, code } = req.query;
  
  const filePath = path.join(process.cwd(), "public/json", "geo.json");
  const fileData = fs.readFileSync(filePath);
  let data = JSON.parse(fileData);

  if(city) {
    data = data.filter(item => item['시도군'] ===  city)
  }


  res.status(200).json(data);
}

export default (req, res) => {
  req.method === "POST"
    ? console.log("POST")
    : req.method === "PUT"
    ? console.log("PUT")
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? get(req, res)
    : res.status(404).send("");
};
