var express = require("express");
let logger = require("morgan")
var path = require("path");
var app = express();
var guessnum = require("./guessNum");

var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get("/",function(req,res)
{
  console.log(path.resolve(__dirname,"index.html"));
  res.sendFile(path.resolve(__dirname,"index.html"));
});

app.post("/init",function(req,res)
{
  console.log(req.body.minVal)
  console.log(req.body.maxVal)
  guessnum.storeNum(parseInt(req.body.minVal), parseInt(req.body.maxVal))
  res.json(null);
});

app.post("/changeminmax",function(req,res)
{
  guessnum.storeNum(parseInt(req.body.minVal), parseInt(req.body.maxVal))
  res.json({minVal:req.body.minVal,maxVal:req.body.maxVal});
});

let retData = {info:0,numTries:0}

app.get("/guess", function(req, res)
{
  console.log("in server number chosen is " + req.query.guessNum);
  retData.info = guessnum.guessNum(req.query.guessNum)
  retData.numTries = guessnum.getNumTries()
  res.json(retData);
});

app.listen(3000,function() {console.log("started on port 3000")});
