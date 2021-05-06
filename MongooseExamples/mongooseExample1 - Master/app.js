
var mongoose = require("mongoose");
var Student = require("./StudentClass");
mongoose.connect("mongodb://localhost/school");   //connects java script file to mongoDB


var obj = {id: 10,name: "Jojo",gradeLevel: 11,sport: false};

var jojo = Student.create(obj,function(error,info){
	console.log("Student.create function");
});


