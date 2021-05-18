


let Student = function(ident,name,grade,driversL,volleyball,basketball,soccer) {
	//console.log("student " + driversL)
	this.ident = ident;
	this.name = name;
	this.grade = grade;
	this.driverslicence = driversL;
	this.volleyball = volleyball;
	this.basketball = basketball;
	this.soccer = soccer;
}

module.exports = Student;
