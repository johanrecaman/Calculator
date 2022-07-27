const numberButton = function(id, number){
    const buttonId = document.querySelector(id);
    buttonId.addEventListener('click', () => {
        const display = document.querySelector("#displayNumber");
        display.textContent = number;
    })   
};

numberButton("#one", 1);
numberButton("#two", 2);
numberButton("#three", 3);
numberButton("#four", 4);
numberButton("#five", 5);
numberButton("#six", 6);
numberButton("#seven", 7);
numberButton("#eight", 8);
numberButton("#nine", 9);