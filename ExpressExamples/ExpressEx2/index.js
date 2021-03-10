var express = require("express")
//var http = require("http")
var app = express()

app.use(function(req,res,next)
{
  console.log("In comes a " + req.method + " to " + req.url)
  res.end("change")
  //next()

})
app.use(function(req,res)
{res.end("Hello World")})
app.listen(3000,function(){console.log("started on port 3000")})
