const numberButton = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operators");
const currentQuery = document.querySelector("#current");
const operateQuery = document.querySelector("#equals");
const clearQuery = document.querySelector("#clear");
const eraseQuery = document.querySelector("#erase");
let isFirstNumber = true;
let displayIndex = 0;
let operatorIndex = 0;
let operator = '';
let n1 = '0';
let n2 = '';

const operate = function(operator, x, y){
    let result = 0;

    let n1 = parseInt(x);
    let n2 = parseInt(y);

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
    return result;
}

const equals = () => {
    let resultado = operate(operator, n1, n2);
    currentQuery.innerHTML = resultado;
    n1 = resultado;
    n2 = '';
    operatorIndex = 0;
    isFirstNumber = false;
}

numberButton.forEach((button) => {
    button.addEventListener('click', ()=>{
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
        } else{
            return;
        }
    })
});

operatorButton.forEach((button) => {
    button.addEventListener('click', () => {
        if(operatorIndex === 1){
            equals();
        }
        isFirstNumber = false;
        operatorIndex = 1;
        operator = button.innerHTML;
        currentQuery.innerHTML += button.innerHTML;
        displayIndex = 0;
        
    })
})

operateQuery.addEventListener('click', () => {
    equals();
})

eraseQuery.addEventListener('click', () => {})

clearQuery.addEventListener('click', () => {
    currentQuery.innerHTML = '0';
    displayIndex = 0;
    operatorIndex = 0;
    operator = '';
    n1 = '';
    n2 = '';

})