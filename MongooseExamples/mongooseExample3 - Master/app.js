
var mongoose = require("mongoose");
var Student = require("./StudentClass");
mongoose.connect("mongodb://localhost/school");   //connects java script file to mongoDB

var obj = {id: 10,name: "Jojo",gradeLevel: 11,sport: false};

var jojo = Student.create(obj,function(error,info){
	console.log("Student.create function");
	Student.find({},function(error,student) {
		console.log("Student.find")
		if (error)
			console.log("Error");
		else
			console.log(student);
		console.log("we are really done this 3rd time");
		mongoose.connection.close();
	});	
	console.log("we are done a 2nd time, but not really");
});
console.log("we are done a 1st time, but not really");

