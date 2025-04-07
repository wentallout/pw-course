// LESSON: replace(), replaceAll()
const phoneNumber = '0123 456 789';
const report = 'Có một lỗi trong hệ thống.';
const numbersStr = '1,234,567';

console.log(phoneNumber.replace(' ', '.')); // 1. Thay khoảng trắng bằng "." trong phoneNumber.

console.log(report.replace('lỗi', 'bug')); // 2. Thay "lỗi" bằng "bug" trong report.

// the correct way because normal replace only works on the first occurence
console.log(numbersStr.replaceAll(',', '.'));
