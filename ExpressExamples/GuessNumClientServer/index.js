var express = require("express");
let logger = require("morgan")
var path = require("path");
var app = express();

//app.use(logger("short"))

app.get("/",function(req,res)//get is based on the url if it matches it goes to that specific get request
{
  console.log(path.resolve(__dirname,"index.html"))//knows where to find the path
  res.sendFile(path.resolve(__dirname,"index.html"))//server send index.html from server to client server dictates what we will see
  //res.end("Welcome to the home page")
})
let infoList = [{name:"Jill"},{name:"Jim"},{name:"John"},{name:"Jojo"}]

app.get("/getInfo",function(req,res)
{
  res.json(infoList[req.query.index])
})
app.get("/request",function(req,res)//get is based on the url if it matches it goes to that specific get request
{
  res.json(infoList[0])//passing back to the client that particular json object
})
app.get("/another",function(req,res)//get is based on the url if it matches it goes to that specific get request
{
  res.json(infoList[1])//passing back to the client that particular json object
})
app.listen(3000,function(){console.log("started on port 3000")})
