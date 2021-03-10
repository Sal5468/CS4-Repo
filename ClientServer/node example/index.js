var http = require("http")

function requestHandler(req,res)//req is client request res is what the server responds with to the client
{
  console.log("In come the a request to " + req.url)

  res.end("Hello World")
}
var server = http.createServer(requestHandler)//creates instance and handle to http
server.listen(3000)//when someone acceses port 3000 when it is accesed the callback function gets called
