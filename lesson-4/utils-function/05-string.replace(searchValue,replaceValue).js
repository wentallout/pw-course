// Thay thế và chỉnh sửa chuỗi (replace)
// all string methods return a new string and doesn't modify the original

const phoneNumber = '0123 456 789';
const report = 'Có một lỗi trong hệ thống.';
const numbersStr = '1,234,567';

function replaceSpaceWithDot(str) {
    let replaced = str.replaceAll(' ', '.');
    return replaced;
}

function replaceWithBug(str) {
    let replaced = str.replace('lỗi', 'bug');

    return replaced;
}

function replaceCommaWithDot(str) {
    let replaced = str.replaceAll(',', '.');
    return replaced;
}

console.log(replaceSpaceWithDot(phoneNumber)); // 1. Thay khoảng trắng bằng "." trong phoneNumber.
console.log(replaceWithBug(report)); // 2. Thay "lỗi" bằng "bug" trong report.
console.log(replaceCommaWithDot(numbersStr)); // 3. Thay "," bằng "." trong numbersStr.
