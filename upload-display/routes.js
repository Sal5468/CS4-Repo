
var express = require("express");
var router = express.Router();
var formidable = require('formidable');
var mv = require('mv');
var latestfile;

router.get("/", function(request, response) {
	  response.sendFile(__dirname + '/public/views/uploadfile.html');
});
router.get("/display", function(request, response) {
	  response.sendFile(__dirname + '/public/views/displayimages.html');
});

router.post('/fileupload', function(req, res)
{
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files)
		{
      var oldpath = files.filetoupload.path;
      var newpath = __dirname + "/public/images/" + files.filetoupload.name;
			latestfile = newpath
		//	console.log( __dirname)
		//	console.log( newpath)
			//latestfile = "/public/images/" + files.filetoupload.name
      mv(oldpath, newpath, function (err)
			{
        if (err) throw err;
				//latestfile = '/public/images/' + files.filetoupload.name;
        res.write('File uploaded and moved!');
        res.end();
      });
    });
});

router.get('/request', function(req, res)
{
	res.json({name:latestfile})
});

module.exports = router;
