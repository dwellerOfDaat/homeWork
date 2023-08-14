
// -------------------------------------1-Hello userName

let userName = 'Demian'
function helloUserName(userName) {
    if (userName) {
        return `Hello ${userName}!`
    }
}
console.log(helloUserName(userName))


// -------------------------------------2-Bigger Than Ten

const numArray = [1, 30, 4, 50, 6, 70, 8, 90, 10]
function biggerThanTen(array) {
    for (let h = 0; h < array.length; h++) {
        if (array[h] > 10) {
            console.log(array[h])
        }
    }
}
console.log(biggerThanTen(numArray))

// -------------------------------------3-Calculator
function basedCalculator(num1, num2, operator) {
    if (operator === 'subtraction') {
        return num1 - num2
    }
    else if (operator === 'addition') {
        return num1 + num2
    }
    else if (operator === 'division') {
        return num1 / num2
    }
    else if (operator === 'multiplication') {
        return num1 * num2
    }
}
console.log(basedCalculator(15, 2, 'multiplication'))

    // -------------------------------------3-Calculator(switch case)
    function basedCalculatorSon(a, b, c) {
        switch (c) {
            case 'subtraction':
                return a - b
            case 'addition':
                return a + b
            case 'division':
                return a / b
            case 'multiplication':
                return a * b
        }
    }
console.log(basedCalculatorSon(15, 2, 'multiplication'))

// subtraction
// addition
// division
// multiplication