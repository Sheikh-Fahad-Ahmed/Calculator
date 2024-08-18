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

function clearHandler() {
    inputBox.value = '';
    firstNumber = 0;
    secondNumber = 0;
    operator = null;
    expression = 0;
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
        if (value == '=') {
            firstNumber = operation(Number(firstNumber), operator, Number(expression));
            inputBox.value = firstNumber;
            expression = '';
            console.log(1);
        } else if (value == 'clear') {
            clearHandler();
        } else if (!firstNumber) {
            firstNumber = expression;
            operator = value;
            expression = '';
            console.log(`bfirst : ${firstNumber}`)
            console.log(`bsecond: ${expression}`)
            console.log(`bthird: ${operator}`)
        } else if (firstNumber && operator && expression) {
            console.log(operator);
            firstNumber = operation(Number(firstNumber), operator, Number(expression));
            inputBox.value = firstNumber;
            expression = '';
            console.log(2);
            console.log(`afirst: ${firstNumber}`)
            console.log(`asecond: ${expression}`)
            console.log(`athird: ${operator}`)
        } if (!expression) {
            operator = value;
        }
    } else {
        expression += value;
        inputBox.value = expression;
    }
}

const operators = ['+', '-', '*', '/', '=', 'clear'];
let expression = '';
let firstNumber = 0;
let secondNumber = 0;
let operator;

let buttons = document.querySelectorAll(".button");
let display = document.querySelector(".display");



[...buttons].forEach((button) => {
    button.addEventListener("click", clickHandler);
});

