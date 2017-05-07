var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

	var a = {
		img: 'http://omph2coqc.bkt.clouddn.com/00213D.png',
    content: 'hello, poi'
	 }
  res.end(JSON.stringify(a));
}).listen(8089, '127.0.0.1');
console.log('Server running at http://APP_PRIVATE_IP_ADDRESS:8080/');
