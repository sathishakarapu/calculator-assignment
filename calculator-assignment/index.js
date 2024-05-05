let display = document.getElementById('display');

let currentNumber = ""

function appendNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
}

function addition() {
    currentNumber += '+';
    display.value = currentNumber;
}

function subtraction() {
    currentNumber += '-';
    display.value = currentNumber;
}

function multiplay() {
    currentNumber += '*';
    display.value = currentNumber;
}

function division() {
    currentNumber += '/';
    display.value = currentNumber;
}

function dot() {
    currentNumber += '.';
    display.value = currentNumber;
}

function clearDisplay() {
    currentNumber = '';
    display.value = "";
}

function calculate() {
    try {
        let results = eval(currentNumber);
        display.value = results;
        currentNumber = results.toString();
    } catch (error) {
        display.value = "Error";
        currentNumber =""
    }
}