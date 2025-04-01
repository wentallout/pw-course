# Lesson 3

## Git & JavaScript Basics

## .gitignore

là file ta có thể đặt vào dự án để làm cho git không theo dõi file hoặc thư mục nào đó nữa.

Ví dụ:

```
# Ignore single file
config.json
secrets.txt

# Ignore directory
node_modules/
dist/
build/

# Ignore by pattern
*.log
.DS_Store
.env*
```

## JS Basic

### Naming convention

-   file thì dùng `kebab-case.js`
-   biến hoặc function thì dùng `camelCase`
-   class `PascalCase`

### Object

Cách tạo một object:

```js
let objectName = {
    key: value1,
    key2: value2,
};
```

Kiểu dữ liệu của key luôn là string. Kiểu dữ liệu của value có thể là bất cứ kiểu dữ liệu nào đã học: string, number,
boolean, null, object, array,...

### Object lồng trong object khác

```js
const student = {
    id: 1,
    name: 'Khoa',
    address: {
        city: 'Ho Chi Minh',
        isCapital: false,
    },
};
```

### Thêm thuộc tính vào 1 object

```js
let bike = {
    make: 'Honda',
    model: 'Air Blade',
};

bike.color = 'Black';
```

### Xoá thuộc tính một object

```js
delete employee.age;
```

Lưu ý:

-   Không nên đặt tên thuộc tính có dấu cách
-   const thì không thay đổi được nhưng mà nếu const đó là object thì thay đổi được thuộc tính

### Logical operator

-   `&&` là trả về true nếu đúng hết
-   `||` là trả về true nếu một trong 2 đúng
-   `!` là phép nghịch đảo, true thành false, false thành true

Ví dụ:

```js
console.log(true && true); // true
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
```

## Array

### Khai báo mảng

```js
let/const arrayName = [1, 2, 'Playwright', true, null];
```

### Thao tác trên mảng

```js
const arr = [1, 2];
console.log(arr.length); // 2
```

### Lặp qua các phần tử trong mảng

```js
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

### Truy xuất phần tử của mảng

```js
const student = ['Khoa', 'Thom'];
console.log(student[0]); // 'Khoa'
```

### Thêm, xoá phần tử trong mảng

```js
// Thêm vào đầu mảng
const arr = [20, 50];
arr.unshift(10);
console.log(arr); // [10, 20, 50]

// Thêm vào cuối mảng
arr.push(30);
console.log(arr); // [10, 20, 50, 30]

// Xoá phần tử đầu mảng
arr.shift();
console.log(arr); // [20, 50, 30]

// Xoá phần tử cuối mảng
arr.pop();
console.log(arr); // [20, 50]
```

Lưu ý: Không nên mix nhiều loại dữ liệu trong một mảng

## Function: Hàm

Hàm là một khối code lam logic gi do có thể sử dụng lại.

### Khai báo hàm

```js
function getName(parameter1, parameter2) {
    // code
}
```

### Gọi hàm

```js
getName(1, 2);
```

### Hàm có giá trị trả về

```js
function add(a, b) {
    return a + b;
}

const sum = add(5, 3); // sum = 8
```
