// every() nhận vào một callback function
// VD Callback function kiểm tra từng phần tử score > 70. Trả về true nếu TẤT CẢ phần tử thỏa điều kiện

// 1.1 Kiểm tra tất cả giá trị trong scores có > 70 không.

function checkIfEveryValueIsHigherThan70(arr) {
    return arr.every((e) => e > 70);
}

const scores = [85, 90, 78];
checkIfEveryValueIsHigherThan70(scores);

// 1.2 Kiểm tra tất cả giá trị trong ages có > 15 không.

function checkIfEveryValueIsHigherThan15(arr) {
    return arr.every((e) => e > 15);
}

const ages = [18, 21, 16, 25];
console.log(checkIfEveryValueIsHigherThan15(ages));

// 1.3 Kiểm tra tất cả từ trong words có độ dài > 3 không.

function checkIfEveryWordIsLongerThan3(arr) {
    return arr.every((e) => {
        return e.length > 3;
    });
}

const words = ['apple', 'banana', 'cherry', 'date'];
checkIfEveryWordIsLongerThan3(words);
