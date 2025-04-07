// Reduce

// Reduce là nó biến nhiều thứ trong mảng thành một thứ duy nhất thông qua acc và val
// VD: nó đi qua từng số trong mảng để lấy tổng

// 6.1 Tính tổng các giá trị trong scores.
const scores = [85, 90, 78];

function getSumOfScore(arr) {
    const sum = arr.reduce((acc, val) => {
        return (acc = acc + val);
    }, 0);

    return sum;
}

getSumOfScore(scores);

// 6.2 Tính tích các giá trị trong numbers.

// Lưu ý: initial là 1 vì nếu là 0 thì nó sẽ nhân 0 thành 0 mất

function getProductOfNumbers(arr) {
    const product = arr.reduce((acc, val) => {
        return (acc = acc * val);
    }, 1);

    return product;
}

const numbers = [1, 2, 3, 4];

console.log(getProductOfNumbers(numbers));

// 6.3 Tính tổng các giá trị trong expenses.

function getSumOfExpenses(arr) {
    const sum = arr.reduce((acc, val) => {
        return (acc = acc + val);
    }, 0);

    return sum;
}

const expenses = [50, 100, 150];
console.log(getSumOfExpenses(expenses)); //300
