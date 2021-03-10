const seedrandom = require ('seedrandom')//way to require module
/////////////////////////////////////////////////////////
let rng = seedrandom()
let value = rng()
console.log(value)

let myrandomnumber = Math.floor(value*10+1)
console.log(myrandomnumber)
//////////////////////////////////////////////////////
console.log("/////////////////////////////////////////")
/////////////////////////////////////////////////////////
const randomModule1 = require("./randomModule1");
myRandomNumber = randomModule1.randomInteger();
console.log("randomModule1 1-10 " + myRandomNumber);
console.log("randomModule1 1-10 range " + randomModule1.getRange());

randomModule1.setMinMax(10,20)
myRandomNumber = randomModule1.randomInteger();
console.log("randomModule1 10-20 " + myRandomNumber);
console.log("randomModule1 10-20 range " + randomModule1.getRange());

randomModule1.setMinMax(-4,3)
myRandomNumber = randomModule1.randomInteger();
console.log("randomModule1 -4-3 " + myRandomNumber);
console.log("randomModule1 -4-3 range " + randomModule1.getRange());
/////////////////////////////////////////////////////////
console.log("/////////////////////////////////////////")
/////////////////////////////////////////////////////////
//const randomModule2 = require("./randomModule2");
//myRandomNumber = randomModule2();//calling anonymous function
//console.log("randomModule2 " + myRandomNumber);
///////////////////////////////////////////////////////
console.log("/////////////////////////////////////////")
/////////////////////////////////////////////////////////
const randomModule3 = require('./randomModule3');
let randomObj = new randomModule3();
myRandomNumber = randomObj.randomInteger();
console.log("randomModule3 " + myRandomNumber);

let obj1 = new randomModule3();
let obj2 = new randomModule3(20,40);
console.log("obj1 random " + obj1.randomInteger());
//console.log("obj1 " + obj1.getRange());
console.log("obj2 random " + obj2.randomInteger());
//console.log("obj2 " + obj2.getRange());

obj2.setMinMax(100,130)

console.log("obj1 random " + obj1.randomInteger());
console.log("obj2 changed random " + obj2.randomInteger());
