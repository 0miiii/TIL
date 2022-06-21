// express 내장 미들웨어

// express.json():
// post 요청 등에 포함된 body(payload) 구조화
// body-parser를 기반으로 JSON 페이로드로 들어오는 요청을 구문 분석합니다.

const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('3000 서버실행');
});

// express.json() 사용
// {strict : false}: 기본 값은 true이며 배열과 객체만 JSON.parse를 수락합니다.
// false이면 "json으로 바꾼 문자"도 읽을 수 있다.
app.use(express.json({strict : false}));

app.get('/test1', (req, res) => {
  res.send("안녕");
});

app.get('/test2', (req, res) => {
  res.json("안녕");
});

app.post('/test3', (req, res) => {
  // "안녕"이라고 요청하면 "안녕"이라고 응답한다.
  res.json(req.body);
  console.log(req.body);
});

app.post('/test4', (req, res) => {
  // "안녕"이라고 요청하면 안녕 이라고 응답한다.
  res.send(req.body);
  console.log(req.body);
});