const resultsDiv = document.querySelector('.output'); 
let displayValueNumbers = [];
let operator;
let var1 = 0;
let var2 = 0;

 function sum(x, y) {
  resultsDiv.textContent = x + y;
}

function subtract(x, y) {
  resultsDiv.textContent = x - y;
}

function multiply(x, y) {
  resultsDiv.textContent = x * y;
}

function divide(x, y) {
  resultsDiv.textContent = x / y;
}

function operate(operator, x, y) {
  if (operator === '+') {sum(x,y)}
  else if (operator === '-') {subtract(x,y)}
  else if (operator === '*') {multiply(x,y)}
  else if (operator === '/') {divide(x,y)}
  else {
  return false;
  }
}

const numbersNodeList = document.querySelectorAll('.number');
numbersNodeList.forEach((button) => {
  button.addEventListener('click', () => {
  resultsDiv.textContent += button.value;
  });
});

const operatorsNodeList = document.querySelectorAll('.operator');
operatorsNodeList.forEach((button) => {
  button.addEventListener('click', () => {
  var1 = (Number(resultsDiv.textContent));
  resultsDiv.textContent = '';
  operator = button.value;
  });
});

const equalSign = document.querySelector('.result');
equalSign.addEventListener('click', () => {
  var2 = Number(resultsDiv.textContent);
  operate(operator, var1, var2);
});

const clearSign = document.querySelector('.clear');
clearSign.addEventListener('click', () => {
  var1 = var2 = 0;
  resultsDiv.textContent = '';
});
