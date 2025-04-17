// map()
// Khái niệm: Phương thức map() tạo ra một mảng mới bằng cách áp dụng một hàm lên
// từng phần tử của mảng gốc.

const scores = [85, 90, 78];

const numbers = [1, 2, 3];

function createModifiedScores(arr) {
    return arr.map((value) => {
        if (value < 90) {
            return value + (value * 10) / 100;
        } else {
            return value - (value * 5) / 100;
        }
    });
}

function turnNumberArrayToStringArray(arr) {
    return arr.map((value) => {
        if (typeof value === 'number') {
            return value.toString();
        } else return value;
    });
}

function doubleEveryValue(arr) {
    return arr.map((value) => {
        return value * 2;
    });
}

console.log(createModifiedScores(scores)); // 4.1 Từ scores, tạo mảng mới: tăng 10% nếu < 90, giảm 5% nếu ≥ 90.  [93.5, 85.5, 85.8]

console.log(turnNumberArrayToStringArray(numbers)); // 4.2 Từ numbers = [1, 2, 3], chuyển thành mảng chuỗi.  ['1', '2', '3']

console.log(doubleEveryValue(numbers)); // 4.3 Từ numbers = [1, 2, 3], nhân đôi mỗi giá trị.  [2, 4, 6]
