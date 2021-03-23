let express = require("express");
let http = require("http");
let path = require("path");

let app = express();

//resolve will put the proper slash between directories.
app.use(function(req,res,next) {
    console.log("req.url = " + req.url);
    next();
});

let publicPath = path.resolve(__dirname,"public");
console.log(publicPath);
app.use(express.static(publicPath));

app.use(function(req,res) {
  console.log("Did not find static file " + req.url);
  res.end("Error");
});

http.createServer(app).listen(3000);
