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
let multiply = false
let divide = false
let nM = [];
let nD =[]
let numberDivide =[]

console.log(total);
console.log(operands);
console.log(total);

function onNumberClick(event) {
  operands.push(Number(event.currentTarget.textContent));
  const targetNumber = operands.map(e => e).join('');
  result.textContent = Number(targetNumber)
  operands.splice(0, 1, Number(targetNumber))
  operands.splice(1,1)  
  console.log(total);
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

  if(event.currentTarget.textContent === 'x'){
    if(!multiply){
      onMultiply();
    }
  }

  if(event.currentTarget.textContent === '/'){
    if(!divide){
      onDivide()
    }
  }
console.log(total);
  operands = [];
}

function onPlus() {
  if (minus || multiply || divide) {
    minus = false;
    multiply = false;
    divide = false;
    operands = [];
  }

  if(plus){
    plus = false
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
  if (plus || multiply || divide) {
    plus = false;
    multiply = false;
    divide = false;
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

function onMultiply(){
  if (plus || minus || divide) {
    plus = false;
    minus = false;
    divide = false;
    operands = [1];
  }
  const numbers = [];
  numbers.push(operands);
  multiply = true;

  const product = numbers.map(e =>{
    if(total ===0 ){
      total = 1
    }

    return total * e
  })

  total = Number(product)

}

function onDivide(){
  console.log(nD);
  if (plus || minus || multiply) {
    plus = false;
    minus = false;
    multiply = false;
    operands = [1];
    nD.push(total)
  }

  const numbers = [];
  numbers.push(operands);
  divide = true;

const quotient = numbers.map(e => {
numberDivide.push(e)
  if(nD.length === 0){
    nD.push(e)
  }
 return numberDivide.length > 2? total/e: nD/e 

}) 

total = Number(quotient)
}




function onEquals() {
  if (plus) {
    onPlus(); 
  }

  if (minus) {
    onMinus();
  }
  if(multiply){
    onMultiply()
  }
  if(divide){
    onDivide()
  }

  operands = []
  result.textContent = total;

}

function onReset(){
  result.textContent = 0
  operands = [];
  numbersMinus = [];
   total = 0;
   plus = false;
   minus = false;
   multiply = false
   divide = false
   nM = [];
   nD =[]
   numberDivide =[]
}

btnNumbers.forEach(number => {
  number.addEventListener('click', onNumberClick);
});

btnOperations.forEach(operation => {
  operation.addEventListener('click', onOperationClick);
});

btnEquals.addEventListener('click', onEquals);

btnReset.addEventListener('click', onReset)
