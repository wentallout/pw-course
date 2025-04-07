const numbers = [1, 2, 3];
const str = 'Playwright';
const student = { name: 'Alex', age: 10, salary: 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

//NOTE: foreach không trả về giá trị gì hết, ofreach thật ra là 1 hành động thôi

// in lần lượt từng phần tử của numbers

numbers.forEach((value) => {
    console.log(value);
});

//Tính tổng của numbers

let sum = 0;
numbers.forEach((value) => {
    sum = sum + value;
});

// const sum = numbers.reduce((acc, curr) => {
//     return acc + curr;
// });

console.log('Sum of numbers array:' + sum);

// tìm giá trị lớn nhất và nhỏ nhất của numbers

// NOTE: hơi khó hiểu vì acc là giá trị đầu tiên trong iteration 1, nhưng mà curr là giá trị sau acc vì nó bắt đầu iterate từ element thứ 2

const maxNum = numbers.reduce((acc, curr) => {
    if (curr > acc) {
        return curr;
    } else {
        return acc;
    }
});

// STEP 1: acc: 1 , curr: 2
// STEP 2: acc: 2 , curr: 3

console.log('Max num is:' + maxNum);

const minNum = numbers.reduce((acc, curr) => {
    if (curr < acc) {
        return curr;
    } else {
        return acc;
    }
});

console.log('Min num is:' + minNum);

// make a new array, each value of that array is doubled

const newNumArr = numbers.map((val, index) => {
    return (val = val * 2);
});

console.log('new array is doubled: ' + newNumArr);
