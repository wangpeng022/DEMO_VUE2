let express = require("express");
let bodyParser = require('body-parser');
let session = require('express-session');
let app = express();
app.use(bodyParser.json());
app.use(session({
  resave: true, //每次访问都重新保存session
  saveUninitialized: true, //保存未初始化的session
  secret: 'persagy' //密钥
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  //允许的来源
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  //允许客户端请求的方法
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
  //允许客户端发送的请求头
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  //允许客户端发送Cookie
  res.header('Access-Control-Allow-Credentials', "true");
  //当客户端发向服务器发post跨域的时候，会先发送OPTIONS请求。如果服务器返回的响应头Access-Control-Allow-Methods里有POST的话，才会再次发送POST请求
  if (req.method == 'OPTIONS') {
    res.end();
  } else {
    next();
  }
});
//获取首页 列表 && 轮播图
let HList = require("./mock/list");

app.get("/list", function (req, res) {
  res.json(HList);
});


app.listen(3000, function () {
  console.log("端口 3000")
});
