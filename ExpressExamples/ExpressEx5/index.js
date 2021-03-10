var express = require("express");
var http = require("http");
var app = express();

app.use(function(req,res,next)//gets called everytime you acces port
{
  console.log("In comes a request to: " + req.url)
  next()
})
app.get("/",function(req,res)//get is based on the url if it matches it goes to that specific get request
{
  res.end("Welcome to the home page")
})
app.get("/favicon.ico",function(req,res)
{
  res.writeHead(200,{'Content-Type' : "image/x-icon"})
  res.end()
  console.log("favicon rquested")
})
app.get("/about",function(req,res)
{
  res.end("Welcome to the about page")// if comment out and then put a next then it will get to the below function
})
app.use(function(req,res)//no get rquests get called if this is called
{
  res.statusCode = 404
  res.end("Error! File not found")
})
http.createServer(app).listen(3000);
