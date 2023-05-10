import axios from "axios";

async function get(req, res) {
  let result = {
    result: "",
    err_msg: "",
    data: {},
  };

  try {
    const { display, query } = req.query;
    let client_id = process.env.NAVER_CLIENT_ID;
    let client_secret = process.env.NAVER_CLIENT_SECRET;

    const api_url = `https://openapi.naver.com/v1/search/blog.json?display=${encodeURI(display)}&query=${encodeURI(query)}`;
    const headers = {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    };

    const response = await axios.get(api_url, {
      headers: headers,
    })

    result.result = "OK"
    result.data = response.data;

    return res.status(200).json(result);
  } catch (error) {
    console.error("에러 발생:", error);

    result.result = "NG"
    result.err_msg = "서버 에러가 발생했습니다."
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
