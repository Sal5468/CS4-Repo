const START = 1;
const RANGE = 10;

function randomInteger() {
  return Math.floor((Math.random() * RANGE + START));
}

module.exports = randomInteger;
