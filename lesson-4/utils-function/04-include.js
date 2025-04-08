// Lesson: Includes
const name = 'Nguyen Van A';
const email = 'example@gmail.com';
const productName = 'MacBook Pro';
const description = 'Khóa học JavaScript cơ bản';

// 1.1 Kiểm tra "Nguyễn" trong name.
function checkIfHasNguyen(string) {
    return string.includes('Nguyen');
}

// 1.2 Kiểm tra "@" trong email.
function checkIfHasAt(string) {
    return string.includes('@');
}

// 1.3 Kiểm tra "Pro" trong productName.
function checkIfHasPro(string) {
    return string.includes('Pro');
}

console.log(checkIfHasNguyen(name));
console.log(checkIfHasAt(email));
console.log(checkIfHasPro(productName));
