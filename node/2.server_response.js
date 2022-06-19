// 서버 응답
// CORS를 고려하지 않았을 때 (포스트맨 사용, OPTIONS method로 요청하지 않음)

const http = require('http');

const server = http.createServer((req, res) => {
  const {method, url} = req;

  if(method === 'GET' && url === '/getTest') {
    res.end('GET 응답했어요');
    console.log('콘솔창: 응답했어요');
  }

  if(method === 'POST' && url === '/postTest') {
    res.end('POST 응답했어요');
    console.log('콘솔창: 응답했어요');
  }

  if(method === 'POST' && url ==='/body_test') {
    // POST 요청에서 body 데이터를 받았으나, 두 값 모두 req.body: undefined가 출력된다.
    // 응답할 때 바로 req.body를 하면 안 되고, 이벤트 리스너를 사용해야 한다.
    res.end(`req.body: ${req.body}`);
    console.log(`req.body: ${req.body}`);
  }

  if(method === 'POST' && url ==='/body') {
    let body = [];

    req.on('data', (chunk) => {
      // data에는 요청 body 값이 들어있고, body변수에 값(chunk)를 push한다.
      body.push(chunk);
    }).on('end', () => {
      // data에 요청 body 값이 없다면, 다음 과정을 수행한다.
      body = Buffer.concat(body).toString();
      res.end(`응답 body: ${body}`);
      console.log(`콘솔창: 응답 body: ${body}`)
    });
  }
});

const ip = 'localhost';
const PORT = 4000;

server.listen(PORT, ip, () => {
  console.log(`서버 실행 ip: ${ip}, PORT: ${PORT}`);
});