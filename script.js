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

let clickHandler = (event) => {
    const value = event.target.value;
    if (operators.includes(value)) {
        if (value == '=') {
            inputBox.value = operation(Number(firstNumber), operator, Number(expression));
            console.log(1);
        } else {
            firstNumber = expression;
            operator = value;
            expression = '';
            console.log(operator);
        }
    } else {
        expression += value;
        inputBox.value = expression;
        console.log(expression);
    }
}

const operators = ['+', '-', '*', '/', '='];
let expression = '';
let firstNumber = 0;
let secondNumber = 0;
let operator;

let buttons = document.querySelectorAll(".button");
let display = document.querySelector(".display");



[...buttons].forEach((button) => {
    button.addEventListener("click", clickHandler);
});


function operation(firstNumber, operator, secondNumber) {
    switch (operator) {
        case '+': return add(firstNumber, secondNumber);
        case '-': return subtract(firstNumber, secondNumber);
        case '*': return (firstNumber, secondNumber);
        case '/': return divide(firstNumber, secondNumber);
    }
}