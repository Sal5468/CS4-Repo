const randomModule3 = require('./randomModule3');
let computerNum;
let numguesses=0;
let obj

exports.storeNum = function(minVal,maxVal)
{
  console.log("Choose a number from " + minVal + " to " + maxVal);
  let obj = new randomModule3(minVal,maxVal);
  computerNum = obj.randomInteger()
  console.log("computerNum = " + computerNum)
}

exports.guessDecider = function(playerguess)
{
  decisionNum=0;
  if(playerguess<computerNum)
  {
    console.log("choose a bigger number")
    decisionNum=-1
  }
  else if (playerguess>computerNum)
  {
    console.log("choose a smaller number")
    decisionNum=1
  }
  else if (playerguess==computerNum)
  {
    console.log("you win")
    decisionNum=0
  }
  numguesses++;
  return (decisionNum)
}

exports.getNumTries = function()
{return numguesses}
