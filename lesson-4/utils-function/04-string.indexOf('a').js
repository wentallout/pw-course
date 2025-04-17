// string.indexOf('a');
// all string methods return a new string and doesn't modify the original

const name = 'Nguyễn Văn A';
const email = 'example@gmail.com';
const description = 'Khóa học JavaScript cơ bản';

function findStrInName(name) {
    return name.indexOf('a');
}

function findAtInEmail(email) {
    return email.indexOf('@');
}

function findJSInDescription(description) {
    return description.indexOf('JavaScript');
}

console.log(findStrInName(name)); // 2.1 Tìm vị trí "a" trong name.
console.log(findAtInEmail(email)); // 2.2 Tìm vị trí "@" trong email.
console.log(findJSInDescription(description)); // 2.3 Tìm vị trí "JavaScript" trong description.
