const result = document.querySelector('.result')
const btnNumbers = document.querySelectorAll('.btn-number')
const btnOperations = document.querySelectorAll('.operation')
const btnEquals = document.querySelector('.btn-equals')
const btnReset = document.querySelector('.btn-reset')
let operand = []
const secondNumber = []
let total=0
let plus = false

function onNumberClick(event){
operand.push(event.currentTarget.textContent)
result.textContent = operand.map(e=>e).join('')

if(plus=true){
    total+= Number(operand.map(e=>e).join(''))
    console.log(total);
}
console.log(result.textContent);
}




function onOperationClick(event){
    
    result.textContent = event.currentTarget.textContent
    const firstNumber = operand
    
    if(event.currentTarget.textContent==='+'){
        onPlus()
    }
    operand=[]
    console.log(event.currentTarget.textContent);

}

function onPlus(){
plus = true

}



function onEquals(){
    result.textContent = total
}


btnNumbers.forEach(number=>{
    number.addEventListener('click', onNumberClick)
})

btnOperations.forEach(operation=>{
    operation.addEventListener('click', onOperationClick)
})

btnEquals.addEventListener('click', onEquals)