const add = function(firstNum, secondNum) {
	return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
	return firstNum - secondNum;
};

const sum = function(arr) {
  return arr.reduce((total, current) => (total += current), 0);
};

const multiply = function(arr) {
  return arr.reduce((total, current) => (total *= current));
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
