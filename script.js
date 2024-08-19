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
        return 'ehh...no';
    }
    let num = num1 / num2;
    return Math.round(num * 100) / 100;
}

function reverseNumber(num) {
    return (-num);
}

function percentage(num) {
    return (num / 100);
}

function clearHandler() {
    inputBox.value = '';
    firstNumber = null;
    secondNumber = null;
    operator = null;
    expression = '';
}


function operation(firstNumber, operator, secondNumber) {
    switch (operator) {
        case '+': return add(firstNumber, secondNumber);
        case '-': return subtract(firstNumber, secondNumber);
        case '*': return multiply(firstNumber, secondNumber);
        case '/': return divide(firstNumber, secondNumber);
    }
}

let clickHandler = (event) => {
    const value = event.target.value;
    if (operators.includes(value)) {
        if (value == '=' && !firstNumber) {
            inputBox.value = expression;
        } else if (value == '=') {
            firstNumber = operation(Number(firstNumber), operator, Number(expression));
            inputBox.value = firstNumber;
            expression = '';
        } else if (value == '%') {
            expression = percentage(Number(expression));
            inputBox.value = expression;
        } else if (value == '+/-') {
            expression = reverseNumber(Number(expression));
            inputBox.value = expression;
        } else if (value == 'clear') {
            clearHandler();
        } else if (!firstNumber) {
            firstNumber = expression;
            operator = value;
            expression = '';
        } else if (firstNumber && operator && expression) {
            firstNumber = operation(Number(firstNumber), operator, Number(expression));
            inputBox.value = firstNumber;
            expression = '';

        } if (!expression) {
            operator = value;
        }
    } else if (expression.length < 10) {
        msg.textContent = "";
        expression += value;
        inputBox.value = expression;
        if (expression.includes('.')) {
            decimal.disabled = true;
        } else {
            decimal.disabled = false;
        }
    } else {
        msg.textContent = "Too Many numbers";
    }
}

let decimal = document.querySelector(".button-decimal");
const operators = ['+', '-', '*', '/', '=', '%', 'clear', '+/-',];
let expression = '';
let firstNumber = 0;
let secondNumber = 0;
let operator;
let msg = document.querySelector(".messages");
let buttons = document.querySelectorAll(".button");
let display = document.querySelector(".display");



[...buttons].forEach((button) => {
    button.addEventListener("click", clickHandler);
});



