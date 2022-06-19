// 서버 CORS

const http = require('http');

const server = http.createServer((req, res) => {

  const {method, url} = req;
  body = [];

  req.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    
    if(method === 'OPTIONS') {
      res.writeHead(200, defaultCorsHeader);
      res.end('')
      console.log('콘솔창: 응답했어요');
    }
    else if(method === 'POST' && url ==='/upper') {  
      res.writeHead(200, defaultCorsHeader);
      res.end(body);
      console.log('콘솔창: 응답했어요');
    } 
    else {
      // 위의 if문을 통해 OPTIONS method에 대한 응답을 해주지 않으면
      // CORS 에러가 발생 
      res.end("오류났어요");
      console.log('콘솔: 오류났어요');
    }
  })
});

const ip = 'localhost';
const PORT = 4000;

server.listen(PORT, ip, () => {
  console.log(`서버 실행 ip: ${ip}, PORT: ${PORT}`);
});

const defaultCorsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 10
};