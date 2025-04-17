// 2. Thêm/xóa phần tử trong mảng (push, pop, shift, unshift)

const numbers = [1, 2, 3, 4];
const names = ['Alice', 'Bob', 'Charlie'];

// 1.  Thêm 4 vào cuối numbers; thêm "David" vào cuối names.

function addNameToArr(arr, name) {
    arr.push(name);
}
addNameToArr(names, 'David');

// 2 Loại bỏ phần tử cuối của numbers = [1, 2, 3, 4].

function removeLastItem(arr) {
    arr.pop();
}
removeLastItem(numbers);
// 3.  Thêm 0 vào đầu numbers; thêm "David" vào đầu names.

function addToBeginning(arr, addValue) {
    arr.unshift(addValue);
}

addToBeginning(numbers, 0);
addToBeginning(names, 'David');

// 4.  Loại bỏ phần tử đầu của numbers = [1, 2, 3, 4].

function removeFirstItem(arr) {
    arr.shift();
}

removeFirstItem(numbers);
