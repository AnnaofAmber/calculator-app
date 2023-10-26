const result = document.querySelector('.result');
const btnNumbers = document.querySelectorAll('.btn-number');
const btnOperations = document.querySelectorAll('.operation');
const btnEquals = document.querySelector('.btn-equals');
const btnReset = document.querySelector('.btn-reset');
const btnPeriod = document.querySelector('.btn-period')
const btnDelete = document.querySelector('.btn-delete')

let operands = [];
let total = 0;

let plus = false;
let minus = false;
let multiply = false;
let divide = false;
let deleted = false
let period = false

// for delete func
let del = [];

// for minus func
let nM = [];
let numbersMinus = [];

// for delete func
let nD =[]
let numberDivide =[]


function onNumberClick(event) {
  let targetNumber
if(deleted){
   operands.splice(0, 1, del);
}
else{
  operands.push(Number(event.currentTarget.textContent))}
   targetNumber = operands.map(e => {
    return e}).join('');
  

 if(period === true){
  const decimal = operands.map(e=>e).join(".")
  result.textContent = Number(decimal)
  operands.splice(0, 1, Number(decimal))
  operands.splice(1,1)
  period = false
 }
 else { 
  result.textContent = Number(targetNumber)
  operands.splice(0, 1, Number(targetNumber))
  operands.splice(1,1)  
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
  del = []
  operands = [];
}

function onPlus() {
  if (minus || multiply || divide|| deleted) {
    minus = false;
    multiply = false;
    divide = false;
    operands = [];
    if(deleted){
      operands = del
      deleted = false
    }
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
  if (plus || multiply || divide || deleted) {
    plus = false;
    multiply = false;
    divide = false;
    operands = [];

    if(deleted){
      operands = del
      deleted = false
    }
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
  if (plus || minus || divide || deleted) {
    plus = false;
    minus = false;
    divide = false;
    operands = [1];

    if(deleted){
      operands = del
      deleted = false
    }
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
  if (plus || minus || multiply || deleted) {
    plus = false;
    minus = false;
    multiply = false;
    operands = [1];
    nD.push(total)

    if(deleted){
      nD =[]
      operands = del
      deleted = false
    }
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
  result.textContent = total

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
   deleted = false
   period = false
   del =[]
   nM = [];
   nD =[]
   numberDivide =[]

}

function onPeriod(){
  if(operands.length === 0){
    operands.push(0)
    result.textContent = '0.'
    period=true
  }
else{
  result.textContent += '.'
  period = true
}
}

function onDelete(){
operands = [Number(result.textContent)]
let d = operands.toString()
del = Number(d.slice(0, d.length-1))
deleted = true
onNumberClick()

}

btnNumbers.forEach(number => {
  number.addEventListener('click', onNumberClick);
});

btnOperations.forEach(operation => {
  operation.addEventListener('click', onOperationClick);
});

btnEquals.addEventListener('click', onEquals);

btnReset.addEventListener('click', onReset)

btnPeriod.addEventListener('click', onPeriod)

btnDelete.addEventListener('click', onDelete)


