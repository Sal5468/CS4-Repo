///////////////////////////////////////////////////////
console.log("/////////////////////////////////////////")
/////////////////////////////////////////////////////////
const randomModule3 = require('./randomModule3');
const guessNum = require('./guessNum');
let minVal = 100
let maxVal = 200
let myGuess
let obj = new randomModule3(minVal,maxVal);
guessNum.storeNum(minVal,maxVal)
let keepPlaying = true
while (keepPlaying)
{
  myGuess = obj.randomInteger()
  console.log("my guess is " + myGuess)
  let guessInfo = guessNum.guessDecider(myGuess)
  if(guessInfo==-1)
  {
    minVal = myGuess+1
    keepPlaying = true
  }
  else if (guessInfo==1)
  {
    maxVal = myGuess-1
    keepPlaying = true
  }
  else
  {
    keepPlaying = false
  }
  obj.setMinMax(minVal,maxVal)
}
console.log("Number of tries = " + guessNum.getNumTries())
