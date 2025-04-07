// PUSH/POP work on the END// SHIFT/UNSHIFT work on the START
const numbers = [1, 2, 3];
const names = ['Alice', 'Bob', 'Charlie'];

numbers.push(4); // Thêm 4 vào cuối numbers;
names.push('David'); //thêm "David" vào cuối names.

numbers.unshift(0); // Thêm 0 vào đầu numbers;

names.unshift('David'); // thêm "David" vào đầu names.

numbers.pop(); //Loại bỏ phần tử cuối của numbers = [1, 2, 3, 4].

numbers.shift(); // Loại bỏ phần tử đầu của numbers = [1, 2, 3, 4].

console.log(numbers); // [ 1, 2, 3 ]
console.log(names); // [ 'David', 'Alice', 'Bob', 'Charlie', 'David' ]
