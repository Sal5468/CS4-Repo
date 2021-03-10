let randomModule3 = function(minVal=1,maxVal=10)
{
  this.minVal = minVal
  this.maxVal = maxVal
}
randomModule3.prototype.setMinMax = function(minVal,maxVal)
{
  this.minVal = minVal
  this.maxVal = maxVal
}
randomModule3.prototype.getMin = function()
{return(this.minVal)}
randomModule3.prototype.getMax = function()
{return(this.maxVal)}

randomModule3.prototype.randomInteger = function()
{
  return Math.floor((Math.random() * this.getRange() + this.minVal));
}
randomModule3.prototype.getRange = function()
{return(this.maxVal-this.minVal+1)}

module.exports = randomModule3;
