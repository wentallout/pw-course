str = 'Playwright';
arr = [1, 2, 3, 4, 3, 55, 23];
dupArr = [1, 2, 3, 1, 2, 4, 5];

// 2.1 In lần lượt từng ký tự của str

function printAllCharFromString(str) {
    for (let char of str) {
        console.log(char);
    }
}

// 2.2 Tạo mảng đảo ngược từ str

function createReversedArrFromString(str) {
    let reverse = [];
    for (let char of str) {
        reverse.unshift(char);
    }

    return reverse;
}

// 2.3 Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr

function printFirstAndLastIndexOfAValueInArray(searchValue, arr) {
    let lastValueIndex = -1;
    let firstValueIndex = -1;
    let currentIndex = 0;

    for (let value of arr) {
        if (value === searchValue) {
            if (firstValueIndex === -1) {
                firstValueIndex = currentIndex;
            }
            lastValueIndex = currentIndex;
        }

        currentIndex++;
    }

    console.log(`First value index: ${firstValueIndex}; Last value index: ${lastValueIndex}`);
}

// 2.4 Lọc các phần tử xuất hiện 1 lần trong dupArr

function findElementsThatOnlyAppearOnce(arr) {
    // tạo object để lưu count
    let countObj = {};

    for (let value of arr) {
        if (countObj[value]) {
            // Nếu đã tồn tại, tăng count lên 1
            countObj[value] = countObj[value] + 1;
        } else {
            // Nếu chưa tồn tại, khởi tạo count = 1
            countObj[value] = 1;
        }
    }

    console.log(countObj); // {1: 2, 2: 2, 3: 1, 4: 1, 5: 1} Ta thấy số 3,4,5 xuất hiện 1 lần

    let result = [];

    for (let value of arr) {
        if (countObj[value] === 1) {
            result.push(value);
        }
    }

    return result;
}

// Test run

printAllCharFromString(str);
console.log(createReversedArrFromString(str));
printFirstAndLastIndexOfAValueInArray(3, arr);
console.log(findElementsThatOnlyAppearOnce(dupArr));
