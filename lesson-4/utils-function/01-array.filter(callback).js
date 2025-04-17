// filter trả về một array mới

const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ['apple', 'banana', 'cherry', 'date'];

function filterScoresHigherThan80(arr) {
    let filtered = [];

    filtered = arr.filter((value) => value > 80);

    return filtered;
}

function filterAgesAbove18(arr) {
    let filtered = [];

    filtered = arr.filter((value) => value >= 18);

    return filtered;
}

function filterWordsLongerThan5(arr) {
    let filtered = [];

    filtered = arr.filter((value) => value.length > 5);
    return filtered;
}

console.log(filterScoresHigherThan80(scores)); // 2.1 Lọc các giá trị trong scores > 80.
console.log(filterAgesAbove18(ages)); // 2.2 Lọc các giá trị trong ages ≥ 18.
console.log(filterWordsLongerThan5(words)); // 2.3 Lọc các từ trong words có độ dài > 5
