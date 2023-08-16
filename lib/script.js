const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operators");
const currentQuery = document.querySelector("#current");
const operateQuery = document.querySelector("#equals");
const clearQuery = document.querySelector("#clear");
const eraseQuery = document.querySelector("#erase");
let isFirstNumber = true;
let displayIndex = 1;
let operatorIndex = 0;
let operator = '';
let n1 = '0';
let n2 = '';

function operate(operator, x, y){
    let result = 0;

    let n1 = parseFloat(x);
    let n2 = parseFloat(y);
    if(isNaN(n2)){
        return n1;
    }
    else if(isNaN(n1)){
        return "error";
    }
    switch(operator){
        case "+":
            result = n1 + n2
            break;
        case "-":
            result = n1 - n2;
            break;
        case "x":
            result = n1 * n2;
            break;
        case "÷":
            if (n2 === 0){
                result = "error";
            }
            else{
                result =  n1 / n2;
            }
            break;
    }
    return result
}

function equals() {
    let resultado = operate(operator, n1, n2);
    n1 = resultado;
    n2 = '';
    isFirstNumber = false;
    operatorIndex = 0;
    displayIndex = resultado.toString().length;
    currentQuery.innerHTML = resultado
}

function numbers(button){
    if(displayIndex < 9){
        if(currentQuery.innerHTML === '0'){
            currentQuery.innerHTML = '';
        }
        currentQuery.innerHTML += button.innerHTML;
        if(isFirstNumber){
            n1 += button.innerHTML;
        }else{
            n2 += button.innerHTML;
        }
        displayIndex++
    }
}

function getKeyboardNumber(key){
    switch(key.key){
        case "/":
            document.getElementById("divide").click();
            break;
        case "*":
            document.getElementById("multiply").click();
            break;
        case "-":
            document.getElementById("subtract").click();
            break;
        case "+":
            document.getElementById("add").click();
            break;
        case "Enter":
            document.getElementById("equals").click();
            break;
        case "Backspace":
            document.getElementById("erase").click();
            break;
        case "Delete":
            document.getElementById("clear").click();
            break;
        default:
            document.getElementById(key.key).click();
            break;
    }
}

function operators(button){
    if(displayIndex >= 9){
        currentQuery.innerHTML = '';
        displayIndex = 0;
    }
    if(operatorIndex >= 1){
        equals();
    }
    isFirstNumber = false;
    displayIndex += 1;
    operatorIndex += 1;
    operator = button.innerHTML;
    currentQuery.innerHTML += button.innerHTML;
}

function clear(){
    currentQuery.innerHTML = '0';
    isFirstNumber = true;
    displayIndex = 0;
    operatorIndex = 0;
    operator = '';
    n1 = '0';
}

numberButton.forEach((button) => {
    button.addEventListener('click', ()=>{
        numbers(button);
    })
});

document.addEventListener('keydown', (key) => {
    getKeyboardNumber(key);
});

operatorButton.forEach((button) => {
    button.addEventListener('click', () => {
        operators(button);
    })
})

operateQuery.addEventListener('click', () => {
    equals();
})

eraseQuery.addEventListener('click', () => {})

clearQuery.addEventListener('click', () => {
    clear();
})