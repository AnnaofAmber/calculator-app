const result = document.querySelector('.result')
const btnNumbers = document.querySelectorAll('.btn-number')
const btnOperations = document.querySelectorAll('.operation')
const btnEquals = document.querySelector('.btn-equals')
const btnReset = document.querySelector('.btn-reset')
let operands = []
const secondNumber = []
let total=0
let plus = false
let equals = false

function onNumberClick(event){
operands.push(Number(event.currentTarget.textContent))
console.log(operands);
result.textContent = event.currentTarget.textContent
console.log(plus);
if(plus){
onPlus()
}
if(equals){
    operands = []
}
}




function onOperationClick(event){
    
    result.textContent = event.currentTarget.textContent

    if(event.currentTarget.textContent==='+'){
        if (!plus) {
            onPlus()
        }
    }
    operands=[]

}

function onPlus(){
const numbers = []
numbers.push(operands)
console.log(numbers);
plus = true

const sum = numbers.map(e => {
    return total+ Number(e)
})
console.log(sum);
total = Number(sum)
console.log(total);

}



function onEquals(){
    equals = true
    result.textContent = total
}


btnNumbers.forEach(number=>{
    number.addEventListener('click', onNumberClick)
})

btnOperations.forEach(operation=>{
    operation.addEventListener('click', onOperationClick)
})

btnEquals.addEventListener('click', onEquals)