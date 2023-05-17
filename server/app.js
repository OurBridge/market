const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3005;

const client_id = '8HL0Kde0BuIxCob_IWH7';
const client_secret = 'KXphtnevh0';
app.get('/search/blog', function (req, res) {
  var api_url = 'https://openapi.naver.com/v1/search/blog?query=' + encodeURI(req.query.query + " 맛집"); // JSON 결과
  var request = require('request');
  var options = {
    url: api_url,
    headers: { 'X-Naver-Client-Id': client_id, 'X-Naver-Client-Secret': client_secret }
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });
});
app.listen(port, function () {
  console.log(port);
});