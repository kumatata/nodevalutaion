var express = require('express');
var http = require('http');
var app = express();

app.use((req,res,next) => {
    console.log(req.protocol + '://' + req.get('host') + req.originalUrl) ;
    next();
      })

app.get('/', function(req, res){
    res.writeHead(200);
    res.write('Hello Express!!!');
    res.end();});
    http.createServer(app).listen(3000);

app.get('/salut', function(req,res){
    res.writeHead(200);
    res.write('Salut!');
    res.end();});
    http.createServer(app).listen(4567);
