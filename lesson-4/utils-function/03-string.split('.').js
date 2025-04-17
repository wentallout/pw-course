// 3. Chia tách chuỗi (split)

const name = 'Nguyễn Văn A';
const emails = 'example1@gmail.com,example2@gmail.com,example3@gmail.com';
const date = '2024-05-19';

// 1. Chia name thành mảng các từ (dùng khoảng trắng).
function splitNameToArray(str) {
    return str.split(' ');
}

// 2. Chia emails thành mảng các email (dùng dấu phẩy).
function splitEmailsToArrayUsingComma(str) {
    return str.split(',');
}

// 3. Chia date thành mảng ngày, tháng, năm (dùng dấu gạch ngang).
function splitDateToArray(str) {
    return str.split('-');
}

console.log(splitNameToArray(name)); //['Nguyễn', 'Văn', 'A']
console.log(splitEmailsToArrayUsingComma(emails)); //['example1@gmail.com', 'example2@gmail.com', 'example3@gmail.com']
console.log(splitDateToArray(date)); //['2024', '05', '19']
