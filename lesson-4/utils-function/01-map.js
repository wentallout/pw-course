// map làm cái gì? map() đơn giản là một cái máy clone ra array mới, nhưng mà trước khi copy thì nó biển đổi từng value trong mảng cũ

// 4.1 Từ scores, tạo mảng mới: tăng 10% nếu < 90, giảm 5% nếu ≥ 90.

function createNewArrayFromScore(arr) {
    const newArr = arr.map((value) => {
        if (value < 90) {
            return value + (value * 10) / 100;
        }
        return value - (value * 5) / 100;
    });

    return newArr;
}

const score = [85, 90, 78];
console.log(createNewArrayFromScore(score));

// 4.2 Từ numbers = [1, 2, 3], chuyển thành mảng chuỗi.

function createNewArrayOfStringsFromNumbers(arr) {
    const newArr = arr.map((value) => {
        return value.toString();
    });

    return newArr;
}

const numbers = [1, 2, 3];
createNewArrayOfStringsFromNumbers(numbers);

// 4.3 Từ numbers = [1, 2, 3], nhân đôi mỗi giá trị.

function createNewArrayButDoubled(arr) {
    const newArr = arr.map((value) => {
        return value * 2;
    });

    return newArr;
}

createNewArrayButDoubled(numbers);
