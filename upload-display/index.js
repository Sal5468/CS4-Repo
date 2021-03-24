var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require("./routes");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use('/', express.static('./'));
app.use(routes);


var infoList = [{"name":null}];
var internetList = [{"name":"https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg"}];

app.get('/request', function(req, res){
	
	if (req.query.index < 0) {
		res.json(infoList[Math.floor(Math.random()*4)]);
	} else {
		res.json(infoList[req.query.index]);
	}
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
