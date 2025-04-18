const student = { name: 'Alex', age: 10, salary: 20 };

// 3.1 In tên và giá trị mỗi thuộc tính của student

function printEveryAttributesOfObj(obj) {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);  // Fixed: use obj parameter
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
        arrOfAttributes.push(key);  // Fixed: use correct array name
    }
    return arrOfAttributes;
}

// Test run
printEveryAttributesOfObj(student);  // name: Alex, age: 10, salary: 20
console.log(sumOfAllNumbersInObj(student));  // 30 (10 + 20)
console.log(getArrOfObjAttributes(student));  // ['name', 'age', 'salary']
