function getNumberArray() {
    var inputNumber = document.getElementById("inputValue").value;
    console.log(inputNumber);

    let arrayOfNumber = inputNumber.split(",");
    console.log(arrayOfNumber);

    let arrayOfIntegers = [];

    arrayOfNumber.forEach(element => {
        arrayOfIntegers.push(parseInt(element));
    });
    return arrayOfIntegers;
}

function sum() {

    let arrayOfNumbers = getNumberArray();
    let sumAcumulator = 0;

    arrayOfNumbers.forEach(element => {
        sumAcumulator += element;
    });
    return sumAcumulator;
}

function avg() {
    return sum() / getNumberArray().length;
}

function greater() {

    let arrayOfNumbers = getNumberArray();
    return arrayOfNumbers.sort((a,b) => b - a)[0];
}

function lesser() {

    let arrayOfNumbers = getNumberArray();
    return arrayOfNumbers.sort((a,b) => a - b)[0];
}

function calculate() {
    let numberOfArray = getNumberArray();
    console.log(numberOfArray);

    document.getElementById("addition").textContent = sum();
    console.log(numberOfArray);

    document.getElementById("half").textContent = avg();


    document.getElementById("greater").innerHTML = greater();
    document.getElementById("lesser").innerHTML = lesser();
}

function example() {
    document.getElementById("inputValue").value = "63,45,58,56";
    calculate();
}