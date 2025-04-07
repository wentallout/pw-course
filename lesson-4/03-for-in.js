const student = { name: 'Alex', age: 10, salary: 20 };
// for...in làm cái gì? for in lặp qua các key của một object

// 3.1 In tên và giá trị mỗi thuộc tính của student

for (let keyStu in student) {
    console.log(keyStu + ': ' + student[keyStu]);
}

// 3.2 Tính tổng các giá trị số trong student

let sum = 0;

for (let keyStu in student) {
    if (typeof student[keyStu] === 'number') {
        sum = sum + student[keyStu];
    }
}

console.log('Sum of numbers in student:', sum);

// 3.3 Tạo mảng chứa tên các thuộc tính của student

let sumArr = [];

for (let keyStu in student) {
    sumArr.push(keyStu);
}

console.log(sumArr);
