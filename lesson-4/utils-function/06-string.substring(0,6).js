// NOTE: The endIndex in substring() is exclusive, meaning it stops right before that index.
// remember it stops right before the endIndex.
// all string methods return a new string and doesn't modify the original

const fullName = 'Nguyễn Văn A';
const date = '2024-05-19';

const lastName = fullName.substring(0, 6); // 1. Trích xuất họ từ fullName (từ đầu đến ký tự thứ 6). Might be bad solution

console.log(lastName); // Nguyễn

const year = date.substring(0, 4); // 2. Trích xuất năm từ date (4 ký tự đầu).

console.log(year); //2024

const email = 'example@gmail.com';
const domain = email.substring(email.indexOf('@') + 1); // 3. Trích xuất tên miền từ email (từ sau "@").

console.log(domain); //gmail.com

// I want a re-usable function

function getLastNameFromFullName(name) {
    return name.substring(0, name.indexOf(' '));
}

console.log(getLastNameFromFullName(fullName));
