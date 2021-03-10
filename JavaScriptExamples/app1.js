var num = 5; //Function Scoped
let val = 6; //Brace Scoped
const number = 7; //Const is like Final but for Java Script

Sal=4
console.log(Sal);//Can use a VAR variable before it has been "Created"
var Sal = 9;

//Sal2 = 4
//console.log(Sal2);//However LET this will cause an error
//let Sal2 = 9;

stuff();//Call to funtion
function stuff()//Function is Java Scripts version of Method
{
  let value = 7;
  console.log(value);
}

let word = "Hello"; //A variable doesnt need to be defined the type of
let isItTrue = false;
let newnumber = 4;
let decnumber = 2.6;

console.log(typeof word);//Will print the type of the variable
console.log(typeof isItTrue);
console.log(typeof newnumber);
console.log(typeof decnumber);

let number4 = 4;
let string4 = "4";
if (number4 == string4) //This will print. Double = is less strict and just compares values
  console.log("num4 is = to string4");
if (number4 === string4) //This will NOT print. Triple = is more strict and just compares values and ypes
  console.log("num4 is really = to string4");

let numberstring1 = "23";
let newval1 = numberstring1 - 3;
console.log(newval1);//You can do this like real subtraction. Will Print 20

let numberstring2 = "23";
let newval2 = numberstring2 + 3;
console.log(newval2);//You can NOT do this like real addition. Will Print 233

let numberstring3 = "23";
let newval3 = parseInt(numberstring3)+3;
console.log(newval3);//You can do this like real addition. Will Print 26
