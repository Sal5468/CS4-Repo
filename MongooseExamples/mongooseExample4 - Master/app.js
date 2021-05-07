
var mongoose = require("mongoose");
var Student = require("./StudentClass");
mongoose.connect("mongodb://localhost/school");   //connects java script file to mongoDB


var obj = {id: 10,name: "Jojo",gradeLevel: 11,sport: false};
var jojo = Student.create(obj,function(error,info){
	console.log("Student.create function1");
});

var obj = {id: 15,name: "Fred",gradeLevel: 9,sport: true};
var fred = Student.create(obj,function(error,info){
	console.log("Student.create function2");
});

var obj = {id: 20,name: "Rocky",gradeLevel: 12,sport: true};
var rocky = Student.create(obj,function(error,info){
	console.log("Student.create function3");
});

timer1()
function timer1() {
    setTimeout(doLater1, 1000);
}
timer2()
function timer2() {
    setTimeout(doLater2, 2000);
}
timer3()
function timer3() {
    setTimeout(doLater3, 3000);
}
timer4()
function timer4() {
    setTimeout(doLater4, 4000);
}
timer5()
function timer5() {
    setTimeout(doLater5, 5000);
}

function doLater1() {
	console.log("Find all students======================")
	Student.find({},function(error,student) {
		if (error)
			console.log("Error");
		else
			console.log(student);
	});
}

function doLater2() {
	console.log("Find the student with id 15======================")
	Student.find({id:15},function(error,student) {
		if (error)
			console.log("Error");
		else
			console.log(student);
	});
}


function doLater3() {
	console.log("Update student id 10 to be in grade 9 and sport true======================")
	Student.findOneAndUpdate({id:10},{gradeLevel:9,sport:true},function(error,oldStudent) {
		if (error)
			console.log(error);
		else
		{
			console.log(oldStudent);
			Student.find({},function(error,student) {
				if (error)
					console.log("Error");
				else
					console.log(student);
			});			
		}
	})
}

function doLater4() {
	console.log("Remove student id 20======================")
	Student.remove({id:20},function(error,removed) {
		if (error)
			console.log(error);
		else
		{
			console.log(removed.result);
			Student.find({},function(error,student) {
				if (error)
					console.log("Error");
				else
					console.log(student);
			});			
		}
	})
}

function doLater5() {
	console.log("Remove student id 27 which does not exist======================")
	Student.remove({id:27},function(error,removed) {
		if (error)
			console.log(error);
		else
		{
			console.log(removed.result);
			Student.find({},function(error,student) {
				if (error)
					console.log("Error");
				else
					console.log(student);
			});			
		}
	})
}