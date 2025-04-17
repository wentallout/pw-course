const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ['apple', 'banana', 'cherry', 'date'];

// 5.1 Kiểm tra scores có giá trị nào > 80 không.
function checkIfScoreHasHigherThan80(arr) {
    return arr.some((value) => {
        return value > 80;
    });
}

console.log(checkIfScoreHasHigherThan80(scores));

// 5.2 Kiểm tra ages có giá trị nào < 18 không.
function checkIfAgesHaveBelow18(arr) {
    return arr.some((value) => {
        return value < 18;
    });
}

console.log(checkIfAgesHaveBelow18(ages));

// 5.3 Kiểm tra words có từ nào dài > 5 không.
function checkIfWordsHaveLongerThan5(arr) {
    return arr.some((value) => {
        return value.length > 5;
    });
}

console.log(checkIfWordsHaveLongerThan5(words));
