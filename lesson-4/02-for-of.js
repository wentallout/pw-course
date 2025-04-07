str = 'Playwright';
dupArr = [1, 2, 3, 1, 2, 4, 5];
arr = [1, 2, 3, 4, 3, 55, 23];

// 2.1 In lần lượt từng ký tự của str

for (let i of str) {
    console.log(i);
}

// Tạo mảng đảo ngược từ str
let reversedStr = [];

for (let char of str) {
    reversedStr.unshift(char);
}

// Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr

// NOTE: hiện tại xài tạm indexOf vì không biết xài for of thế nào mà tìm được

const firstIndex = arr.indexOf(3);
const lastIndex = arr.lastIndexOf(3);

// Lọc các phần tử xuất hiện 1 lần trong dupArr

let uniqueElements = [];
for (let num of dupArr) {
    count = 0;
    for (let checkNum of dupArr) {
        if (num === checkNum) {
            count++;
        }
    }

    if (count === 1) {
        uniqueElements.push(num);
    }
}
