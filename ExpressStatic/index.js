var express = require('express');
var path = require('path');
var app = express();
//The below line should not be done or else the client can get at everything.
//app.use(express.static(path.join(__dirname,"/")));

app.use(express.static(path.join(__dirname,"public")));//exposes only public
//app.use(express.static(path.join(__dirname,"public/images")));
//app.use(express.static(path.join(__dirname,"public/text")));

app.get("/", function(request, response) {
      response.sendFile(path.join(__dirname,'index.html'));
});

app.get('/requestImage', function(req, res){
    res.json({"name":"pogdrew.jpg"});
});
app.get('/requestText', function(req, res){
    res.send({"name":"file.txt"});
});

app.listen(3000);
