// Express

// Express로 구현한 서버가 Node.js HTTP 모듈로 작성한 서버와 다른 점
// 1. 미들웨어를 추가할 수 있다.
// 2. 라우터를 제공한다.

// express 설치
// npm install express

// express로 서버 구현하기
const express = require('express');
const app = express(); // 애플리케이션 객체 리턴
const port = 4999;

app.listen(port, () => {
  console.log('서버열렸어요');
})

// 라우팅
// 메서드와 url로 분기점을 만드는 것을 Routing이라고 한다.
app.get('/upper', (req, res) => {
  res.send('get 응답했어요');
  console.log('콘솔: get 응답했어요');
});

app.get('/lower', (req, res) => {
  res.send('get 응답했어요');
  console.log('콘솔: get 응답했어요');
});

app.post('/upper', (req, res) => {
  res.send('post 응답했어요');
  console.log('콘솔: post 응답했어요');
});

app.post('/lower', (req, res) => {
  res.send('post 응답했어요');
  console.log('콘솔: post 응답했어요');
});





