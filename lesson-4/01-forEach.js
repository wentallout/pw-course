const numbers = [1, 2, 3];

// 1.1 In lần lượt từng phần tử của numbers.

function printEveryNumbers() {
    numbers.forEach((value) => {
        console.log(value);
    });
}

// 1.2 Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers

function getSum() {
    let sum = 0;
    numbers.forEach((value) => {
        sum = sum + value;
    });

    return sum;
}

function getMaxOfArr(arr) {
    let max = arr[0];
    arr.forEach((value) => {
        if (value >= max) {
            max = value;
        }
    });

    return max;
}

function getMinOfArr(arr) {
    let min = arr[0];
    arr.forEach((value) => {
        if (value <= min) {
            min = value;
        }
    });

    return min;
}

// 1.3 Tạo mảng mới từ numbers, mỗi phần tử nhân đôi

function createNewDoubledArray(arr) {
    let doubledArr = [];

    arr.forEach((value) => {
        doubledArr.push(value * 2);
    });

    return doubledArr;
}

printEveryNumbers();
console.log(getSum()); //6
console.log(getMaxOfArr(numbers)); //3
console.log(getMinOfArr(numbers)); //1
console.log(createNewDoubledArray(numbers)); // [2,4,6]
