/////////////////////
console.log("////////////////");
/////////////////////
stuff();

function stuff()
{
  let val = 3;
  console.log("in stuff val = "+ val);//prints "in stuff val = 3"
}

console.log(stuff2());//prints "7"

function stuff2()//you dont need to define return type
{
  let val = 3;
  return(val+4)//returns 7
}
/////////////////////
console.log("////////////////");
/////////////////////
let value = 3.5;

stuff3(4,value)

function stuff3(val1,val2)
{
  console.log(val1+val2);//prints "7.5"
}

let globalval=8;
stuff4(4)//if function does not have a reciving variable this wont be passed in

function stuff4()
{
  console.log(globalval+11)//prints "19"
}

stuff5()//if you dont pass in a variable when it wants one

function stuff5(trialVariable)
{
  console.log(trialVariable)//will print "undefined"
}
/////////////////////
console.log("////////////////");
/////////////////////
let funcPtr = function (value)//pointer to the function //not named anything its called anonymos
{
  console.log("anonymos fuction "+value)//prints "anonymos fuction "+ "7,true,34.1,hi"
}
let funcPtr2 = funcPtr;

funcPtr(7);
funcPtr(true);
funcPtr2(34.1);
funcPtr2("hi");
/////////////////////
console.log("////////////////");
/////////////////////
moreStuff(5,function(num){console.log(num+4)})//fuction is within the pass through ends up printing "19"
function moreStuff(val,func)//func is reciving the pointer to the function
{
  func(val*3);//using pointer to call function in call
}
/////////////////////
console.log("////////////////");
/////////////////////
callIt = function(){
  console.log("in callIt");//will print "in callIt" once
}

moreStuff2(callIt)

function moreStuff2 (func){
  func()
}
