const result = document.querySelector('.result');
const btnNumbers = document.querySelectorAll('.btn-number');
const btnOperations = document.querySelectorAll('.operation');
const btnEquals = document.querySelector('.btn-equals');
const btnReset = document.querySelector('.btn-reset');
let operands = [];
let numberMinus ;
let total = 0;
let plus = false;
let minus = false;

function onNumberClick(event) {
  if (!minus) {
    numberMinus = Number(event.currentTarget.textContent);
  } 
  if(total !== 0){
    numberMinus = 0
  }


  operands.push(Number(event.currentTarget.textContent));
  result.textContent = operands.map(e => e).join('');
  console.log(minus);
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
  const numbers = [];
  numbers.push(operands);
  plus = true;
  const sum = numbers.map(e => total + Number(e));
  total = Number(sum);
}

function onMinus() {
  const numbers = [];
  numbers.push(operands);
  let nM = numberMinus
  minus = true;
  const difference = numbers.map(
    e => {
       total = total - Number(e) +nM
       
       return total;
    }

  );
 
  console.log(difference);
  total = Number(difference);
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
