const name = 'Nguyen Van A';
const wordArr = name.split(' '); // 1. Chia name thành mảng các từ (dùng khoảng trắng).
console.log(wordArr); // [ 'Nguyen', 'Van', 'A' ]

const email = 'example1@gmail.com,example2@gmail.com,example3@gmail.com';
const emailArr = email.split(','); // 2. Chia emails thành mảng các email (dùng dấu phẩy).
console.log(emailArr); // [ 'example1@gmail.com', 'example2@gmail.com', 'example3@gmail.com' ]

const date = '2024-05-19';
const dateArray = date.split('-'); // 3. Chia date thành mảng ngày, tháng, năm (dùng dấu gạch ngang).
console.log(dateArray);
['2024', '05', '19'];
