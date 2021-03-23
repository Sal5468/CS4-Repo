var express = require('express');
var app = express();

app.use(function(req,res){
  console.log("In comes a request to: " + req.url)
  res.end("welcome to web prog")
})

var port = process.env.PORT  || 2500;//there is no port variable so it stores in 3000

console.log(port)
app.listen(port)
