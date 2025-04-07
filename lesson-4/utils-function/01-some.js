// some

// 5.1 Kiểm tra scores có giá trị nào > 80 không.

function checkIfOneScoreHigherThan80(arr) {
    return arr.some((value) => {
        return value > 80;
    });
}

const scores = [85, 90, 78];
console.log(checkIfOneScoreHigherThan80(scores)); // true

// 5.2 Kiểm tra ages có giá trị nào < 18 không.

function checkIfOneAgeLowerThan18(arr) {
    return arr.some((value) => {
        return value < 18;
    });
}
const ages = [18, 21, 16, 25];
console.log(checkIfOneAgeLowerThan18(ages)); //true

// 5.3 Kiểm tra words có từ nào dài > 5 không.
const words = ['apple', 'banana', 'cherry', 'date'];
function checkIfOneWordLongerThan5(arr) {
    return arr.some((value) => {
        return value.length > 5;
    });
}

console.log(checkIfOneWordLongerThan5(words)); //true
