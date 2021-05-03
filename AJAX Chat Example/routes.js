let path = require("path");
let express = require("express");    //new
let router = express.Router();      //new

let messageNum = 0;
let name = "";
let comment = "";
router.get("/",function(req,res) {
  res.sendFile(path.resolve(__dirname,"index.html"));
});

router.post("/comment",function(req,res) {
  messageNum++;
  name = req.body.name;
  comment = req.body.comment;
  console.log("comment " + name + ": " + comment);
  res.json(null);
});
router.get("/message",function(req,res) {
  if (name && name != "")
    res.json({messageNum:messageNum,message:name + ": " + comment});
  else
    res.json(null);
});

module.exports = router;   //new
