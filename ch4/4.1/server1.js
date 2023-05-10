// const http = require('http');

// http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//   res.write('<h1>Hello Node!</h1>');
//   res.end('<p>Hello Server!</p>');
// })
//   .listen(8080, () => { // 서버 연결
//     console.log('8080번 포트에서 서버 대기 중입니다!');
//   });



const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
  res.write('<h1>ㅎㅇㅎㅇㅎㅇ</h1>');
  res.end('<p>서버야안녕</p>');
})
.listen(8080, () => {
  console.log('8080 포트에서 서버 대기중~!');
});