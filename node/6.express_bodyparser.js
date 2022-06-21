// body-parser
// post 요청 등에 포함된 body(payload) 구조화
// 1. npm install body-parser
// 2. body-parser 불러오기
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('서버실행');
});

// application/x-www.form-urlencoded
app.use(bodyParser.urlencoded({extended : true}));
// application/json
app.use(bodyParser.json())

app.post('/test1', (req, res) => {
  res.send(req.body);
});

app.post('/test2', (req, res) => {
  // 안녕하세요가 문자열로 (안녕하세요) 전송된다.
  res.send("안녕하세요");
});

app.post('/test3', (req, res) => {
  // 안녕하세요가 json형태로 ("안녕하세요") 전송된다.
  res.json("안녕하세요");
});

app.post('/test4', (req, res) => {
  res.send({과일: "사과"});
});

// res.send()
// send에 전해진 argument에 따라서 Content-type이 자동적으로 만들어진다.

// res.json()
// json이 아닌 것도 json 형식으로 바꾸어서 보내준다. 
// 즉 content-type 헤더를 application/JSON으로 고정한다. 
// 그런데 결국 res.json()도 마지막에 res.send()를 호출한다.

// res.end()
// 보내줄 데이터가 없지만 response를 끝내고 싶을 때 사용한다.
// res.json()과 res.send()는 응답을 종료해주는 역할을 하여 같이 쓸 필요가 없다. 
// ex) res.status(400).end();