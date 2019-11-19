var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/chart', function(req, res) {
    res.sendFile(path.join(__dirname + '/chart.html'));
});

app.get('/end', function(req, res) {
    res.sendFile(path.join(__dirname + '/end.html'));
});

app.listen(PORT,function(){
    console.log('Running')
});
