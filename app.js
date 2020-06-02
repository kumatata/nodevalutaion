const http = require('http');
const url = new URL("http://localhost:5000") ;
url.pathname = '/bidule';

http.createServer(function (request, response){
    response.writeHead(200);
    response.write('<h1>bidule</h1>\n');
    response.end();}).listen(5000);
    console.log(url.toString()); 