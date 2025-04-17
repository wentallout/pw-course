// every (xài với array, nhận vào predicate , trả ra true/false)

const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ['apple', 'banana', 'cherry', 'date'];

function checkIfScoresAllHigherThan70(arr) {
    return arr.every((value) => value > 70);
}

function checkIfAgesAllHigherThan15(arr) {
    return arr.every((value) => value > 15);
}

function checkIfAllWordsLongerThan3(arr) {
    return arr.every((value) => value.length > 3);
}

console.log(checkIfScoresAllHigherThan70(scores)); // 1.1 Kiểm tra tất cả giá trị trong scores có > 70 không.
console.log(checkIfAgesAllHigherThan15(ages)); // 1.2 Kiểm tra tất cả giá trị trong ages có > 15 không.
console.log(checkIfAllWordsLongerThan3(words)); // 1.3 Kiểm tra tất cả từ trong words có độ dài > 3 không.
