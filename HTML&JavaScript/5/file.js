let obj = new MathStuff(4,7);
obj.addPrint()
console.log(obj.addReturn())
function MathStuff(val1,val2)
{
  this.val1=val1
  this.val2=val2

  this.addReturn = function()//adding a name value pair and the value is a function
  {return(this.val1+this.val2)}

  this.addPrint = function()//"instance method"
  {console.log(this.val1+this.val2)}

}

if(obj.addReturn ===15)
{console.log("This number is 15")}
else
{console.log("This number is not 15")}

for (let i = 0; i < 6; i++) {
  console.log(i)
}
