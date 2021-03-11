var express = require("express");
let logger = require("morgan")
var path = require("path");
var app = express();

app.use(logger("short"))

app.get("/",function(req,res)//get is based on the url if it matches it goes to that specific get request
{
  console.log(path.resolve(_dirname,"index.html"))
  res.sendFile(path.resolve(_dirname,"index.html"))
  //res.end("Welcome to the home page")
})
let infoList = [{name:"Jill"},{name:"Jim"},{name:"John"},{name:"Jojo"}]
app.get("/request",function(req,res)//get is based on the url if it matches it goes to that specific get request
{
  res.json(infoList[0])
})
app.get("/request",function(req,res)//get is based on the url if it matches it goes to that specific get request
{
  res.json(infoList[1])
})
app.listen(3000,function(){console.log("started on port 3000")})
