// 서버 생성

const http = require('http');

const server = http.createServer((req, res) => {
  // 아래와 같은 할당을 하지 않으면 method와 url을 사용하고 싶을 때
  // req.method, req.url으로 작성해야한다.
  const {method, url} = req;
  
});

const ip = 'localhost';
const PORT = 4000;

server.listen(PORT, ip, () => {
  console.log(`서버 실행 ip: ${ip}, PORT: ${PORT}`);
})