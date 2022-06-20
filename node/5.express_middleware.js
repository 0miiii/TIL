// middleware

// 미들웨어는 요청과 응답 사이에 실행시키는 코드이다.
// 요청에 필요한 기능을 더하거나 문제가 별견되면 거르는 역할을 한다.
// 미들웨어의 로드 순서는 중요하며, 먼저 로드되는 미들웨어 함수가 먼저 실행한다.

// 자주 사용하는 미들웨어
// POST 요청 등에 포함된 body(payload)를 구조화할 때(쉽게 얻어내고자 할 때)
// 모든 요청/응답에 CORS 헤더를 붙여야 할 때
// 모든 요청에 대해 url이나 메서드를 확인할 때
// 요청 헤더에 사용자 인증 정보가 담겨있는지 확인할 때

// 미들웨어 직접 만들기
// 현재의 미들웨어 함수가 요청-응답 주기를 종료하지 않는 경우에는 next()를 호출하여 그 다음 미들웨어 함수에 제어를 전달해야 합니다. 
// 그렇지 않으면 해당 요청은 정지된 채로 방치됩니다.
const express = require('express');
const app = express();

const middleWareTest = function(req, res, next) {
  console.log('test 미들웨어 실행했어요');
  next();
}
// 요청이 발생하면 middleWareTest 미들웨어가 동작합니다.
app.use(middleWareTest);

const requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  console.log('time 미들웨어 실행했어요');
  next();
};
// 특정 경로에서 요청이 발생하면 미들웨어가 동작합니다.
app.use('/test', requestTime);

app.get('/test', function(req, res) {
  console.log('하이');
  res.send();
})

app.listen(3000);