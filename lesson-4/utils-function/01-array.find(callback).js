// Khái niệm: Phương thức find() trả về giá trị của phần tử đầu tiên trong mảng thỏa
// mãn điều kiện được chỉ định trong hàm callback, nếu không có phần tử nào thỏa mãn
// thì trả về undefined.

const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ['apple', 'banana', 'cherry', 'date'];

function findFirstValueInScoresHigherThan80(arr) {
    return arr.find((value) => value > 80);
}

function findFirstValueInAgesHigherThan20(arr) {
    return arr.find((value) => value > 20);
}

function findFirstWordLongerThan5(arr) {
    return arr.find((value) => value.length > 5);
}

console.log(findFirstValueInScoresHigherThan80(scores)); // 3.1 Tìm giá trị đầu tiên trong scores > 80.
console.log(findFirstValueInAgesHigherThan20(ages)); // 3.2 Tìm giá trị đầu tiên trong ages > 20.
console.log(findFirstWordLongerThan5(words)); // 3.3 Tìm từ đầu tiên trong words có độ dài > 5.
