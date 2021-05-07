
var mongoose = require("mongoose");
//Try Student2   Studentc   Students
var Student1 = mongoose.model("Students",{
	id: Number,
	name: String,
	gradeLevel: Number,
	sport: Boolean
});

module.exports = Student1;




