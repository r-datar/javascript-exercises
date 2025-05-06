const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 -  num2 ;
	
};

const sum = function(numbers) {
  let answer = 0;
	if(Array.isArray(numbers)) {
    for (let i = 0; i < numbers.length; i++) {
      answer += numbers[i];
    }
  }
  return answer;
};

const multiply = function(numbers) {
  let answer = 1;
	if(Array.isArray(numbers)) {
    for (let i = 0; i < numbers.length; i++) {
      answer *= numbers[i];
    }
  }
  return answer;
};

const power = function(base,power) {
	
  return Math.pow(base,power);
};

const factorial = function(num) {
	let facto = 1;
  if (num > 0) {
    for(let i = num; i > 0 ; i--) {
      facto *= i;
    }
  }
  
  return facto;
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
