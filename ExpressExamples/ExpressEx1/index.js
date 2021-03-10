var express = require("express")//acces to express module
//var http = require("http")//below show modifcation to no need this

var app = express()//aplication handle ho to use express

app.use(function(req,res){//use function passing in a callback function gets called when there is any rquest to the port
  console.log("In comes a request to: " + req.url)
  res.end("welcome to web prog")
})

//http.createServer(app).listen(3000)//creates server with app and listens on that port.
//below is a wrapper
app.listen(3000,function(){console.log("started on port 3000")})
//function is called for when you start the server
