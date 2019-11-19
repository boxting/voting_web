var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT,function(){
    console.log('Running')
});
