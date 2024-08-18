function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0) {
        return 'cannot divide by 0';
    }
    return num1 / num2;
}

let firstNumber;
let secondNumber;
let operator;

let buttons = document.querySelectorAll(".button");
let display = document.querySelector(".display");

[...buttons].forEach((button) => {
    button.addEventListener("click", (event) => {
        
        
    });
});




function operation(firstNumber, operator, secondNumber) {
    switch (operator) {
        case '+': add(firstNumber, secondNumber);
            break;
        case '-': subtract(firstNumber, secondNumber);
            break;
        case '*': multiply(firstNumber, secondNumber);
            break;
        case '/': divide(firstNumber, secondNumber);
            break;
    }
}