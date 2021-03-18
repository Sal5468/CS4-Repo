let express = require('express');
let path = require("path");
var bodyParser = require('body-parser');   //new Need to add for post

const guessnum = require('./guessNum');

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));  //new Need to add for post
app.use(bodyParser.json());                          //new Need to add for post

//req is info sending to server from client.
//res is info sending to client from server.
app.get("/",function(req,res) {
    console.log(path.resolve(__dirname,"index.html"));
    res.sendFile(path.resolve(__dirname,"index.html"));
});
app.get("/setMinMax",function(req,res) {
    console.log(path.resolve(__dirname,"setMinMax.html"));
    res.sendFile(path.resolve(__dirname,"setMinMax.html"));
});

//app.post("/init",function(req,res) {
//    guessnum.storeNum(parseInt(req.body.minVal),parseInt(req.body.maxVal));
//    res.json(null);
//});
app.post('/init', function(req, res){
    guessnum.chooseComputerNum();
    res.json(null);
});

app.post('/changeminmax', function(req, res){
    guessnum.storeMinMax(parseInt(req.body.minVal),parseInt(req.body.maxVal));
    res.json({minVal:req.body.minVal,maxVal:req.body.maxVal});
});

app.get('/getminmax', function(req, res){
    res.json({minVal:guessnum.getMin(),maxVal:guessnum.getMax()});
});


let retData = {info:0,numTries:0}     //javascript object
app.get("/guess", function(req, res){
    console.log("in server number chosen is " + req.query.guessNum);
    retData.info = guessnum.guessNum(req.query.guessNum);
    retData.numTries = guessnum.getNumTries();
    res.json(retData);
});

//below is a wrapper of http.createServer(requestHandler).listen(3000);
app.listen(3000,function() {
    console.log("started on port 3000");
});
