let obj1 = new Object();//creation of object dynamicly start adding variables

obj1.name = "Fred";//Like right here
obj1.age = 34;//and here
console.log(obj1)
obj1.isMale = true;
obj1.weight = 148.8;
console.log(obj1)
/////////////////////
console.log("////////////////");
/////////////////////
let obj2 = {name:"Annie",age:17,isMale:false,gradeLevel:12};//not based on previous object

console.log(obj2)
console.log(obj2.name)//can print a specific info
console.log(obj2['age'])//another way to get at another entry in obj
/////////////////////
console.log("////////////////");
/////////////////////
let obj3 = {name:"Rover",address:{country:"USA",state:"CA",city:"Vista"},age:7}//Can create object in an object
console.log(obj3)
console.log(obj3.address)//prints whole object
console.log(obj3.address.state)//prints name value pair within the oject
/////////////////////
console.log("////////////////");
/////////////////////
function Car(make,model,year)//looks like constuctor
{
  this.make = make;//look like instance variables
  this.model = model;
  this.year = year;
}
let myCar = new Car("Mini","Cooper",2016)//looks like it is creating instances of classes
console.log(myCar)
let yourCar = new Car("Tesla","Roadster",2020)
console.log(yourCar);
/////////////////////
console.log("////////////////");
/////////////////////
console.log(yourCar.model)//can get at specific values in object
console.log(yourCar["model"])
/////////////////////
console.log("////////////////");
/////////////////////
let carPtr = myCar;//making obt to new poitner
console.log(carPtr);
carPtr.newVal1 = 8;
carPtr.newVal2 = {val1:false,val2:"Hello"}
console.log(carPtr)
console.log(carPtr.newVal2.val2)
/////////////////////
console.log("////////////////");
/////////////////////
console.log(myCar)//retain the values. Point to the same object but did not effect function itself
/////////////////////
console.log("////////////////");
/////////////////////
let newCarPtr = new Car("Toyota","Camary",1998)//see? no effect on creation of pointer
console.log(newCarPtr)
/////////////////////
console.log("////////////////");
/////////////////////
for (let i in yourCar)
{
  console.log(i);//it is printing the "keys"
  console.log(yourCar[i])//it is putting the acual "values"
}
