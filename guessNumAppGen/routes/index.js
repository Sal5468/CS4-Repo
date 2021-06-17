//routes/index.js===============

var express = require('express');
var router = express.Router();

///////////jytop
let path = require("path");
var bodyParser = require('body-parser');   //new Need to add for post

const guessnum = require('./guessNum');

router.use(bodyParser.urlencoded({ extended: true }));  //new Need to add for post
router.use(bodyParser.json());                          //new Need to add for post

//////////jybot

/* GET home page. */
router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
  res.render('index', {});

});


////////jytop

router.post('/init', function(req, res){
    guessnum.chooseComputerNum();
    res.json(null);
});

router.post('/changeminmax', function(req, res){
    guessnum.storeMinMax(parseInt(req.body.minVal),parseInt(req.body.maxVal));
    res.json({minVal:req.body.minVal,maxVal:req.body.maxVal});
});

router.get('/getminmax', function(req, res){
    res.json({minVal:guessnum.getMin(),maxVal:guessnum.getMax()});
});


let retData = {info:0,numTries:0}     //javascript object
router.get("/guess", function(req, res){
    console.log("in server number chosen is " + req.query.guessNum);
    retData.info = guessnum.guessNum(req.query.guessNum);
    retData.numTries = guessnum.getNumTries();
    res.json(retData);
});


///////jybot


module.exports = router;

 
