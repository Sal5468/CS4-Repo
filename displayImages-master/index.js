
var express = require('express');
var app = express();



app.use(express.static(__dirname + "/"));  // 0
//app.use('/', express.static('./'));

//app.use(express.static('./images'));    // 1
//app.use('/hello',express.static('./images'));    // 2

app.get("/", function(request, response) {
	  response.sendFile(__dirname + '/index.html');
});


var infoList = [{"name":"deer.jpg"},{"name":"hero.jpg"},{"name":"bison.jpg"},{"name":"release.jpg"}];
var internetList = [{"name":"https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg"}];

app.get('/request', function(req, res){
	if (req.query.index < 0) {
		res.json(infoList[Math.floor(Math.random()*4)]);
	} else {
		res.json(infoList[req.query.index]);
	}
});

app.get('/internet', function(req, res){
	res.json(internetList[0]);
});

app.listen(3000);
