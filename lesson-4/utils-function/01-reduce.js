// 6. reduce

const scores = [85, 90, 78];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 6.1 Tính tổng các giá trị trong scores.
function getSumOfScores(arr) {
    return arr.reduce((acc, value) => acc + value, 0);
}

console.log(getSumOfScores(scores));

// 6.2 Tính tích các giá trị trong numbers.
function productOfNumbers(arr) {
    return arr.reduce((acc, value) => acc * value, 1); //the 1 is actually important cuz you dont want to multiply zero
}

console.log(productOfNumbers(numbers));

// 6.3 Tính tổng các giá trị trong expenses.
function getSumOfExpenses(arr) {
    return arr.reduce((acc, value) => acc + value, 0);
}

console.log(getSumOfExpenses(expenses));
