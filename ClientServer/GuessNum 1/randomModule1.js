let minVal = 1;
let maxVal = 10;

exports.randomInteger = function () {
    return Math.floor((Math.random() * exports.getRange() + minVal));
};
exports.setMinMax = function (min,max) {
  minVal=min
  maxVal=max
};
exports.getMin = function ()
{return (minVal)};
exports.maxVal = function ()
{return (maxVal)};
exports.getRange = function ()
{return (maxVal-minVal+1)};
