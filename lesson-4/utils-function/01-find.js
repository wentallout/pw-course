// find

// 3.1 Tìm giá trị đầu tiên trong scores > 80.

function getFirstValueHigherThan80(arr) {
    const value = arr.find((value) => {
        return value > 80;
    });

    return value;
}

const scores = [85, 90, 78];
getFirstValueHigherThan80(scores); //85

// 3.2 Tìm giá trị đầu tiên trong ages > 20.

function getFirstValueHigherThan20(arr) {
    const value = arr.find((value) => {
        return value > 20;
    });

    return value;
}

const ages = [18, 21, 16, 25];
getFirstValueHigherThan20(ages);

// 3.3 Tìm từ đầu tiên trong words có độ dài > 5.

function getFirstWordLongerThan5(arr) {
    const word = arr.find((e) => {
        return e.length > 5;
    });

    return word;
}

const words = ['apple', 'banana', 'cherry', 'date'];
getFirstWordLongerThan5(words);
