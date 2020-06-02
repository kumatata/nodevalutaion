var express = require('express');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');

app.use((req,res,next) => {
    console.log(req.protocol + '://' + req.get('host') + req.originalUrl) ;
    next();
      })
     
app.set('view engine', 'pug');
app.set('views', './views');
     
 // for parsing application/json
app.use(bodyParser.json()); 
     
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded
     
app.post('/', function(req, res){
    console.log(req.body);
    res.send("Success");
     });

app.get('/', function(req, res){
    res.render('form');});
    http.createServer(app).listen(3000);

app.get('/salut', function(req,res){
    res.writeHead(200);
    res.write('Salut!');
    res.end();});
    http.createServer(app).listen(4567);
