const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operators");
const previousQuery = document.querySelector("#previous");
const currentQuery = document.querySelector("#current");
const operateQuery = document.querySelector("#equals");
const clearQuery = document.querySelector("#clear");
const eraseQuery = document.querySelector("#erase");
let displayIndex = 0;
let operatorIndex = 0;
let isFirstCalc = true;
let isCurrent = true;
let isCompleted = false;
let currentOperator = '';
let firstNumber = '';
let secondNumber = '';

const sum = (a, b) => a + b;

const subtract = (a, b) => a + b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if(b === 0){
        return "error";
    }
    else{
        return a/b;
    }
}

const operate = function(operator, x, y){
    let result = 0;

    let n1 = parseInt(x);
    let n2 = parseInt(y);

    switch(operator){
        case "+":
            result = sum(n1, n2);
            break;
        case "-":
            result = subtract(n1, n2);
            break;
        case "x":
            result = multiply(n1, n2);
            break;
        case "÷":
            result = divide(n1, n2);
            break;
    }
    return result;
}

const equals = () => {
    secondNumber = previousQuery.innerHTML;
    let resultado = operate(currentOperator, firstNumber, secondNumber);
    previousQuery.innerHTML = resultado;
    firstNumber = resultado;
    secondNumber = 0;
    isCompleted = true;
}


const newCalc = function(){
    isCurrent = false;
    operatorIndex = 0;
    firstNumber = secondNumber;
    secondNumber = 0;
    
}

numberButton.forEach((button) => {
    button.addEventListener('click', ()=>{
        if (isFirstCalc) {
            currentQuery.innerHTML = '';
            isFirstCalc = false;
        }
        if(isCompleted){
            previousQuery.innerHTML = '';
        }
        if(displayIndex < 9){
            if(isCurrent){
                currentQuery.innerHTML += button.innerHTML;
                displayIndex++
            } else{
                previousQuery.innerHTML += button.innerHTML;
                displayIndex++
            }
        } else{
            return;
        }
    })
});

operatorButton.forEach((button) => {
    button.addEventListener('click', () => {
        if(isCompleted){
            operatorIndex = 1;
        }
        if(operatorIndex < 1){
            isCurrent = false;
            operatorIndex = 1;
            currentOperator = button.innerHTML;
            firstNumber = currentQuery.innerHTML;
            currentQuery.innerHTML = '';
            displayIndex = 0;
        }
        else{
            currentOperator = button.innerHTML;
        }
    })
})

operateQuery.addEventListener('click', () => {
    equals();
})

eraseQuery.addEventListener('click', ()=>{
    if(isCurrent){
        currentQuery.innerHTML = currentQuery.innerHTML.slice(0, -1);
    }else{
        previousQuery.innerHTML = previousQuery.innerHTML.slice(0, -1);
    }
})

clearQuery.addEventListener('click', () => {
    currentQuery.innerHTML = '';
    previousQuery.innerHTML = '';
    displayIndex = 0;
    operatorIndex = 0;
    isFirstCalc = true;
    isCurrent = true;
    isCompleted = false;
    currentOperator = '';
    firstNumber = '';
    secondNumber = '';

})