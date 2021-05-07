var mongoose = require("mongoose");
var Home = require("./HomeClass");
mongoose.connect("mongodb://localhost/property");   //connects java script file to mongoDB


var obj = {id: 1,style: "ranch",cost: 550000,view: false};
Home.create(obj,function(error,info){});

var obj = {id: 2,style: "spanish",cost: 725000,view: true};
Home.create(obj,function(error,info){});

var obj = {id: 3,style: "victorian",cost: 800000,view: false};
Home.create(obj,function(error,info){});

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

function doLater1() {
	console.log("Find the home with id 2======================")
	Home.find({id:2},function(error,home) {
		if (error)
			console.log("Error");
		else
			console.log(home);
	});
}

function doLater2() {
	console.log("Update home id 1 to be cost 600000 view true======================")
	Home.findOneAndUpdate({id:1},{cost:600000,view:true},function(error,oldHouse) {
		if (error)
			console.log(error);
		else
		{
			Home.find({id:1},function(error,home) {
				if (error)
					console.log("Error");
				else
					console.log(home);
			});
		}
	})
}

function doLater3() {
	console.log("Remove home id 3======================")
	Home.remove({id:3},function(error,removed) {
		if (error)
			console.log(error);
		else
			console.log(removed.result);
	})
}

function doLater4() {
	console.log("Display all homes======================")
	Home.find({},function(error,homes) {
		if (error)
			console.log("Error");
		else
			console.log(homes);
	});
}
