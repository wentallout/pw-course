const student = { name: 'Alex', age: 10, salary: 20 };

// 3.1 In tên và giá trị mỗi thuộc tính của student

function printEveryAttributesOfObj(obj) {
    for (let key in obj) {
        console.log(`${key}: ${student[key]}`);
    }
}

// 3.2 Tính tổng các giá trị số trong student

function sumOfAllNumbersInObj(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            sum = sum + obj[key];
        }
    }
    return sum;
}

// 3.3 Tạo mảng chứa tên các thuộc tính của student

function getArrOfObjAttributes(obj) {
    let arrOfAttributes = [];
    for (let key in obj) {
        arr.push(key);
    }
    return arrOfAttributes;
}

// Test run
printEveryAttributesOfObj(student);
console.log(sumOfAllNumbersInObj(student));
console.log(getArrOfObjAttributes(student));
