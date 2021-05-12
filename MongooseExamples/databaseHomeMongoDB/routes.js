

let path = require("path");
let express = require("express");
var mongoose = require("mongoose");   //new

let router = express.Router();

router.get("/",function(req,res){
	res.sendFile(path.resolve(__dirname,"public/views/index.html"));
});

const myDatabase = require('./myDatabase');
let db = new myDatabase();

const Home = require('./HomeClass');

router.post('/create', function(req, res){
	if (req.body.cost == 0) {
		res.json({retVal:false});
		return;
	}
	let obj = new Home(req.body.id,req.body.style,req.body.cost,req.body.view);
	return(db.postHome(obj,res));
});


router.get('/read', function(req, res){
	return(db.getHome(req.query.id,res));
});



router.put('/update', function(req, res){
	if (req.body.cost == 0) {
		res.json({retVal:false});
		return;
	}
	let obj = new Home(req.body.id,req.body.style,req.body.cost,req.body.view);
	return(db.putHome(obj,res));
});

router.delete('/delete/:identifier', function(req, res){
	return( db.deleteHome(req.params.identifier,res));
});


module.exports = router;
