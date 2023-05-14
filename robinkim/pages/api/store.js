import fs from "fs";
import path from "path";

async function get(req, res) {
  const { type, market } = req.query;
  
  const filePath = path.join(process.cwd(), "public/json", "gwangju_store.json");
  const fileData = fs.readFileSync(filePath);
  let data = JSON.parse(fileData);

  if(type) {
    data = data.filter(item => item['분류'] ===  type)
  }

  if(market) {
    data = data.filter(item => item['시장명'] ===  market)
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
