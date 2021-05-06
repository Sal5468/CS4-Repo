
var mongoose = require("mongoose");
var Student = require("./StudentClass");
mongoose.connect("mongodb://localhost/school");   //connects java script file to mongoDB


var obj = {id: 10,name: "Jojo",gradeLevel: 11,sport: false};

var jojo = Student.create(obj,function(error,info){
	console.log("Student.create function");
});
polling()
function polling() {
    setTimeout(doLater, 1000);
}

function doLater() {
	
	Student.find({},function(error,student) {
		console.log("Student.find")
		if (error)
			console.log("Error");
		else
			console.log(student);
	});

}


/*
polling()
function polling() {
    setTimeout(doLater, 1000);
}

function doLater() {
	//code goes here
}

*/
