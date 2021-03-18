const randomModule3 = require('./randomModule3');

let computerNum = 10;
let numTries;
let obj = new randomModule3();   //added

exports.storeMinMax = function(minValue,maxValue) {
    console.log("number from " + minValue + " to " + maxValue);
    obj = new randomModule3(minValue,maxValue);
}

exports.chooseComputerNum = function() {
    computerNum = obj.randomInteger();
    console.log("computerNum = " + computerNum);
    numTries = 0;
}

exports.guessNum = function(guess) {
    let retVal = 0;
    if (guess < computerNum) {
        console.log("Choose a bigger number");
        retVal = -1;
    } else if (guess > computerNum){
        console.log("Choose a smaller number");
        retVal = 1;
    } else {
        console.log("You won");
        retVal = 0;
    }
    numTries++;
    return(retVal);
}

exports.getNumTries = function() {
    return (numTries);
}

exports.getMin = function() {
    return (obj.getMin());
}
exports.getMax = function() {
    return (obj.getMax());
}
