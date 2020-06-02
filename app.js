var http = require('http');
http.createServer(function (request, response){
    response.writeHead(200);
    response.write('<h1>Nous sommes en évaluation :D</h1>\n');
    response.end();}).listen(5000);
    console.log('Server running at ​http://localhost:5000​');