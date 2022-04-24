const resultsDiv = document.querySelector('#temp');
const finalResultDiv = document.querySelector('.finalResult');
let displayValueNumbers = [];
let operator;
let var1 = 0;
let var2 = 0;

 function sum(x, y) {
  finalResultDiv.textContent = (x + y).toFixed(3);
}

function subtract(x, y) {
  finalResultDiv.textContent = (x - y).toFixed(3);
}

function multiply(x, y) {
  finalResultDiv.textContent = (x * y).toFixed(3);
}

function divide(x, y) {
  if (!y) {
    finalResultDiv.textContent = 'Division by 0 is not allowed.';
  } else {
    finalResultDiv.textContent = (x / y).toFixed(3);
  }
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
const operatorsNodeList = document.querySelectorAll('.operator');
const numbersNodeList = document.querySelectorAll('.number');
const equalSign = document.querySelector('.result');
const clearSign = document.querySelector('.clear');
const reverseSign = document.querySelector('.reverseSign');
const dotSign = document.querySelector('.dot');

numbersNodeList.forEach((button) => {
  button.addEventListener('click', (e) => {
  if (var2 !== 0) {
    var1 = Number(finalResultDiv.textContent);
    resultsDiv.textContent += e.target.value;
    operatorsNodeList.forEach((bttn) => {
      bttn.classList.remove('activeBttn');
    });
  } else {
    resultsDiv.textContent += button.value;
    operatorsNodeList.forEach((bttn) => {
      bttn.classList.remove('activeBttn');
    });
  }
  });
});

dotSign.addEventListener('click', (e) => {
  e.target.disabled = true;
  resultsDiv.textContent += '.';
});

operatorsNodeList.forEach((button) => {
  button.addEventListener('click', (e) => {
  const activeBttnRef = document.querySelector('.activeBttn');
  if (activeBttnRef === null) {
    e.target.classList.add('activeBttn');
  } else {
    activeBttnRef.classList.remove('activeBttn');
    e.target.classList.add('activeBttn'); 
  }
  
  if(var1 !== 0) {
    if ( activeBttnRef !== null ) {
      operator = e.target.value;
      return;
    } else {
      var2 = Number(resultsDiv.textContent);
      resultsDiv.textContent = '';
      operate(operator, var1, var2);
      dotSign.disabled = false;
    }
  } else {
    var1 = (Number(resultsDiv.textContent));
    resultsDiv.textContent = '';
    dotSign.disabled = false;
  }

  operator = e.target.value;
  });
});

equalSign.addEventListener('click', (e) => {
  const activeBttnRef = document.querySelector('.activeBttn');
  if (activeBttnRef !== null) {
    alert('Pressing the = sign while an operator is selected will ' +
    'generate errors. Please finish your calculations.');
  } else {
    var2 = Number(resultsDiv.textContent);
    operate(operator, var1, var2);
    e.target.disabled = true;
  }
});

clearSign.addEventListener('click', () => {
  var1 = var2 = 0;
  operator = undefined;
  resultsDiv.textContent = finalResultDiv.textContent = '';
  equalSign.disabled = false;
  
});

reverseSign.addEventListener('click', () => {
  resultsDiv.textContent = (Number(resultsDiv.textContent) * -1);
});
