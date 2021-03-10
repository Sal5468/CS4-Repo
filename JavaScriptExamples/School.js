//Starting code=============================
function School() {
    this.students = [];
    this.index = 0;
    this.addStudent = function(student) {
      this.students[this.index] = student;
      this.index++;
    }

    this.gpaAbove = function(gpa) {
        console.log("Students gpa above " + gpa)
        for (let i of this.students)
        {
            if (i.gpa>gpa)
                console.log(i.name)
        }
    }
    this.coursesAbove = function(num) {
        console.log("Students have more courses than " + num)
        for (let i of this.students)
        {
            if (i.numCourses()>num)
                console.log(i.name)
        }
    }

}

//Constructor function.
//Create the Course object using the below completed function Course
//and use the defaults where name is "Biology"  and  period is 1
let Course = {
  name : "Biology",
  period : 1,
  getInfo : function{
    return( "Course" + this.name + " " + this.period);
  }

/*
function Course(name,period) {
    this.name = name;
    this.period = period;
    this.getInfo = function() {
        return("Course " + this.name + " " + this.period);
    }
}
*/
function Student(name,age,gpa) {
    this.name = name
    this.age = age
    this.gpa = gpa
    this.courses = []
    this.index = 0;

    this.addCourse = function(course) {
      this.courses[this.index] = course
      this.index++;
    }
    this.getCourses = function() {
        let str = "Courses ";
        for (let i of this.courses) {
            str += i.name + " "
        }
        return str;
    }
    this.numCourses = function() {
        return (this.courses.length);
    }
    this.getInfo = function() {
      return("Student "+ name+" " + age + " "+ gpa + " "+ this.getCourses())
    }

}

let theSchool = new School();

let biology = Object.create(Course);
biology.name = "Biology";
biology.period = 2;

let usHistory = Object.create(Course);
usHistory.name = "US_History";
usHistory.period = 1;

let chemistry = Object.create(Course);
chemistry.name = "Chemistry";
chemistry.period = 2;

let calculus = Object.create(Course);
calculus.name = "Calculus";
calculus.period = 3;

let annieMay = new Student("Annie May",14,3.8);
annieMay.addCourse(biology);
annieMay.addCourse(calculus);

let tino = new Student("Tino",16,3.4);
tino.addCourse(chemistry);
tino.addCourse(usHistory);

let bettySue = new Student("Betty Sue",17,3.1);
bettySue.addCourse(biology);
bettySue.addCourse(usHistory);
bettySue.addCourse(calculus);

theSchool.addStudent(annieMay);
theSchool.addStudent(tino);
theSchool.addStudent(bettySue);

console.log("==============");
theSchool.gpaAbove(3.5)
console.log("==============");
theSchool.coursesAbove(2)
console.log("================")
console.log(tino.getInfo())
