var express = require("express");
let logger = require("morgan")
var path = require("path");
var app = express();

var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//app.use(logger("short"))

app.get("/",function(req,res)
{
//  console.log(path.resolve(__dirname,"index.html"))
  res.sendFile(path.resolve(__dirname,"index.html"))
  //res.end("Welcome to the home page")
})
let infoList = [{name:"Jill"},{name:"Jim"},{name:"John"},{name:"Jojo"}]

app.get("/getInfo",function(req,res)
{
  let index = parseInt(req.query.index)
  if(index < infoList.length)
  {
    res.json(infoList[req.query.index])
    return
  }
  res.json(null)
})
app.post("/postInfo",function(req,res)
{
  infoList[req.body.index]={name:req.body.name}
  res.json(null)

})
app.listen(3000,function(){console.log("started on port 3000")})
