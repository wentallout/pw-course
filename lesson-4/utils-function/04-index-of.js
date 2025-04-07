// 2. IndexOf:

const name = 'Nguyễn Văn A';
const email = 'example@gmail.com';
const description = 'Khóa học JavaScript cơ bản';

function indexOfAChar(string, char) {
    return string.indexOf(char);
}

// 2.1 Find "a" in name;
console.log(indexOfAChar(name, 'a'));

// 2.2 Tìm vị trí "@" trong email.
console.log(indexOfAChar(email, '@'));

// 2.3 Tìm vị trí "JavaScript" trong description.
console.log(indexOfAChar(description, 'JavaScript'));
