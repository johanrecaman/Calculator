let isFirstNumber = true;
let displayIndex = 1;
let operator = '';
let n1 = '0';
let n2 = '';

function selector(query){
    return query.includes('#') ? document.querySelector(query) : document.querySelectorAll(query);
}

function operate(operator, x, y){
    let n1 = parseFloat(x);
    let n2 = parseFloat(y);

    if(isNaN(n1)){
        return 'error';
    }
    else if(isNaN(n2)){
        return n1
    }

    switch(operator){
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "x":
            return n1 * n2;
        case "÷":
            return n2 === 0? "error" : n1 / n2;
        default:
            return 'error';
    }
}

function equals() {
    const resultado = operate(operator, n1, n2);
    n1 = resultado;
    n2 = '';
    isFirstNumber = false;
    operator = '';
    displayIndex = resultado.toString().length;
    selector('#query').innerHTML = resultado;
}

function numbers(button){
    if(displayIndex < 9){
        if(selector('#query').innerHTML === '0'){
            selector('#query').innerHTML = '';
        }
        selector('#query').innerHTML += button.innerHTML;
        if(isFirstNumber){
            n1 += button.innerHTML;
        }else{
            n2 += button.innerHTML;
        }
        displayIndex++
    }
}

function getKeyboard(key){
    const keyMapping = {
        "/": "divide",
        "*": "multiply",
        "-": "subtract",
        "+": "add",
        "Enter": "equals",
        "Backspace": "erase",
        "Delete": "clear",
    };
    
    const buttonId = keyMapping[key.key] || key.key;
    document.getElementById(buttonId)?.click();
}

function operators(button){
    if(displayIndex >= 9){
        selector('#query').innerHTML = '';
        displayIndex = 0;
    }
    if(operator){
        equals();
    }
    isFirstNumber = false;
    displayIndex++;
    operator = button.innerHTML;
    selector('#query').innerHTML += button.innerHTML;
}

function clear(){
    selector('#query').innerHTML = '0';
    isFirstNumber = true;
    displayIndex = 0;
    operator = '';
    n1 = '0';
    n2 = '';
}

selector('.number').forEach((button) => {
    button.addEventListener('click', ()=>{
        numbers(button);
    })
});

document.addEventListener('keydown', (key) => {
    getKeyboard(key);
});

selector('.operators').forEach((button) => {
    button.addEventListener('click', () => {
        operators(button);
    })
})

selector('#equals').addEventListener('click', () => {
    equals();
})

selector('#erase').addEventListener('click', () => {
    //Falta implementar
})

selector('#clear').addEventListener('click', () => {
    clear();
})