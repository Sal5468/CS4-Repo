let express = require('express');
let path = require("path");

const guessnum = require('./guessNum');

let app = express();

//req is info sending to server from client.
//res is info sending to client from server.
app.get("/",function(req,res) {
    console.log(path.resolve(__dirname,"index.html"));
    res.sendFile(path.resolve(__dirname,"index.html"));
});

app.get("/init",function(req,res) {
//???    set the guess num min and max
    console.log(req.query.minVal)
    console.log(req.query.maxVal)
    guessnum.storeNum(req.query.minVal, req.query.maxVal)
    res.json(null);
});

let retData = {info:0,numTries:0}     //javascript object
app.get("/guess", function(req, res)
{
    console.log("in server number chosen is " + req.query.guessNum);
//???  check the the player's guess and return the hint.
      retData.info = guessnum.guessNum(req.query.guessNum)
//???  return how many tries.
      retData.numTries = guessnum.getNumTries()
    res.json(retData);
});

//below is a wrapper of http.createServer(requestHandler).listen(3000);
app.listen(3000,function() {
    console.log("started on port 3000");
});
