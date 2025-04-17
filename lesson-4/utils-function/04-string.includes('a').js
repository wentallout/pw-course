// Includes
// all string methods return a new string and doesn't modify the original

const name = 'Nguyễn Văn A';
const email = 'example@gmail.com';
const productName = 'MacBook Pro';

function checkIfHasNguyen(str) {
    return str.includes('Nguyễn');
}

function checkIfHasAt(str) {
    return str.includes('@');
}

function checkIfHasPro(str) {
    return str.includes('Pro');
}

console.log(checkIfHasNguyen(name)); // 1.1 Kiểm tra "Nguyễn" trong name.
console.log(checkIfHasAt(email)); // 1.2 Kiểm tra "@" trong email.
console.log(checkIfHasPro(productName)); // 1.3 Kiểm tra "Pro" trong productName.
