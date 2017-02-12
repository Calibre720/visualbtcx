var express = require('express');

var app = express();

var request = require('request');

app.get('/order_book', function(req, res) {
	request('http://api.btcxindia.com/order_book/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        res.send(body);
    }
});
});

app.get('/trades', function(req, res) {
	request('http://api.btcxindia.com/trades/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        res.send(body);
    }
});
});

app.use('', express.static('webapp'));

app.listen(3000,'127.0.0.1');
console.log('Listening on port 3000...');
