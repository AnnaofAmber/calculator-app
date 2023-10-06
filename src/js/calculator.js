const result = document.querySelector('.result');
const btnNumbers = document.querySelectorAll('.btn-number');
const btnOperations = document.querySelectorAll('.operation');
const btnEquals = document.querySelector('.btn-equals');
const btnReset = document.querySelector('.btn-reset');
let operands = [];
let numbersMinus = [];
let total = 0;
let plus = false;
let minus = false;
let nM = [];

function onNumberClick(event) {
  operands.push(Number(event.currentTarget.textContent));
  result.textContent = operands.map(e => e).join('');
  if (plus) {
    onPlus();
  }
  if (minus) {
    onMinus();
  }
}

function onOperationClick(event) {
  result.textContent = event.currentTarget.textContent;
  if (event.currentTarget.textContent === '+') {
    if (!plus) {
      onPlus();
    }
  }

  if (event.currentTarget.textContent === '-') {
    if (!minus) {
      onMinus();
    }
  }
  operands = [];
}

function onPlus() {
  if (minus) {
    minus = false;
    operands = [];
  }
  const numbers = [];
  numbers.push(operands);
  plus = true;
  const sum = numbers.map(e => {
    return total + Number(e);
  });
  total = Number(sum);
}

function onMinus() {
  if (plus) {
    plus = false;
    operands = [];
  }
  const numbers = [];
  numbers.push(operands);
  minus = true;
  const difference = numbers.map(e => {
    numbersMinus.push(e);
    if (nM.length === 0) {
      nM.push(e);
    }

    return total === 0 ? nM - e : total - e;
  });

  if (numbersMinus.length >= 2) {
    total = Number(difference);
  }
}

function onEquals() {
  result.textContent = total;
}

btnNumbers.forEach(number => {
  number.addEventListener('click', onNumberClick);
});

btnOperations.forEach(operation => {
  operation.addEventListener('click', onOperationClick);
});

btnEquals.addEventListener('click', onEquals);
