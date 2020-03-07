var express = require('express');
var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile('index.html')
})

app.listen(PORT, console.log(`Now listening on port ${PORT}`));