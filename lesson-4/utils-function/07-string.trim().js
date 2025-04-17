// all string methods return a new string and doesn't modify the original
const name = ' Nguyễn Văn A ';
const userInput = ' 12345 ';
const email = ' example@gmail.com ';

function removeSpaceFromName(str) {
    return str.trim();
}

function removeSpaceFromInput(str) {
    return str.trim();
}

function removeFirstSpaceOfEmail(str) {
    return str.trimStart();
}

console.log(removeSpaceFromName(name)); // 1. Loại bỏ khoảng trắng đầu và cuối của name. "Nguyễn Văn A"
console.log(removeSpaceFromInput(userInput)); // 2. Loại bỏ khoảng trắng của userInput. "12345"
console.log(removeFirstSpaceOfEmail(email)); // 3. Loại bỏ khoảng trắng đầu của email. "example@gmail.com "
