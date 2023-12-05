/* 라이브러리 import */
const http = require("http");
const fs = require("fs");
const express = require("express");
const path = require("path");

var app = express();
/*
  정적 리소스 제공
  이렇게 작성하면 html에서 css, js 등의 정적 리소스를 불러올 때 public 폴더를 기준으로 검색 수행
  ex) 만약 notice.css 파일을 불러오고자 하는 경우 다음과 같이 작성
  <link rel="stylesheet" href="/css/notice.css">
*/
app.use(express.static(path.join(__dirname, 'public')));

/*
  url 연결 목록 start
*/
app.use('/', express.static(path.join(__dirname, 'html')));
app.use('/findStore', express.static(path.join(__dirname, '/html/store.html')));
app.use('/noticeMain', express.static(path.join(__dirname, '/html/noticeList.html')));
/*
  url 연결 목록 end
*/

// json 데이터 조회
app.get('/data', (req, res) => {
  try {
    const jsonData = JSON.parse(fs.readFileSync(__dirname + '/public/json/composeStore.json', 'utf8'));
    res.json(jsonData);
  } catch (err) {
    console.error(err);
    res.status(500).send('서버 오류');
  }
});

// 서버 기동 정보
http.createServer(app).listen(3000, function () {
  console.log("express server start...");
});