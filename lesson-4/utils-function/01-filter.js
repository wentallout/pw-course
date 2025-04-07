// filter() là một phương thức của Array trong JavaScript có 2 đặc điểm chính:
// Chức năng: Tạo một mảng mới chứa các phần tử thỏa điều kiện từ mảng gốc
// Không làm thay đổi mảng gốc (non-mutating)
// Chạy một callback function cho mỗi phần tử trong mảng
// Trả về một mảng MỚI chứa các phần tử thoả điều kiện, không thoả hết thì rỗng []

// 2.1 Lọc các giá trị trong scores > 80.

const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ['apple', 'banana', 'cherry', 'date'];

function filterScoresHigherThan80(arr) {
    const filteredArr = arr.filter((value) => {
        return value > 80;
    });

    return filteredArr;
}

filterScoresHigherThan80(scores);

// 2.2 Lọc các giá trị trong ages ≥ 18.

function filterAgesHigherOrEqual18(arr) {
    const filteredArr = arr.filter((value) => {
        return value >= 18;
    });

    return filteredArr;
}

// 2.3 Lọc các từ trong words có độ dài > 5.

function filterWordsLengthHigherThan5(arr) {
    const filteredArr = arr.filter((value) => {
        return value.length > 5;
    });

    return filteredArr;
}

filterWordsLengthHigherThan5(words);
