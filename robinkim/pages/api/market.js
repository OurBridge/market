import axios from "axios";

async function get(req, res) {
  let result = {
    result: "",
    err_msg: "",
    data: {},
  };
  const { page, perPage } = req.query;
  const service_key = process.env.OPENAPI_SERVICE_KEY;
  const api_url = `https://api.odcloud.kr/api/15095853/v1/uddi:bc80387d-e19f-4659-b53b-cd0245ef61a0?page=${page}&perPage=${perPage}&serviceKey=${service_key}`;

  try {
    const response = await axios.get(api_url);

    result.result = "OK";
    result.data = response.data;

    return res.status(200).json(result);
  } catch (error) {
    console.error("에러 발생:", error);

    result.result = "NG";
    result.err_msg = "서버 에러가 발생했습니다.";
    return res.status(200).json(result);
  }
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
