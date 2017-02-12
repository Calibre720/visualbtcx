//HTTP PROXY Code
/*
var http = require("http");

var options = {
  host: "10.3.100.207",
  port: 8080,
  path: "http://api.btcxindia.com/ticker/",
  headers: {
    Host: "api.btcxindia.com",
  }
};
http.get(options, function(res) {
  //console.log(res);
  res.pipe(process.stdout);
});*/
//HTTPS PROXY CODE

var Http = require('http');
var Tls = require('tls');

var req = Http.request({
    host: '10.3.100.207',
    port: 8080,
    method: 'CONNECT',
    path: 'api.btcxindia.com/ticker/:443',
});

req.on('connect', function (res, socket, head) {
    var cts = Tls.connect({
        host: 'api.btcxindia.com',
        socket: socket
    }, function () {
        cts.write('GET / HTTP/1.1\r\nHost: api.btcxindia.com\r\n\r\n');
    });

    cts.on('data', function (data) {
        console.log(data.toString());
    });
});

req.end();

//Server Starter Code

/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');


var express = require('express');
var app = express();

app.get('/wines', function(req, res) {
    res.send([{name:'wine1'}, {name:'wine2'}]);
});
app.get('/wines/:id', function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
});

app.listen(3001);
console.log('Listening on port 3001...');
*/
