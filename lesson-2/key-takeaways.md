# Summary

## Version control system

VCS là hệ thống quản lý các phiên bản. Có 3 loại VCS: Local, Centralize, Distributed

Ví dụ:

-   Local VCS: RCS
-   Centralize VCS: SVN, CVS
-   Distributed VCS: Git, Mercurial

## Git và GitHub

Git:

-   Là phần mềm trên máy tính
-   Chạy được trên command line
-   Là công cụ quản lý phiên bản
-   Quản lý file trong Git repository
-   Có các tính năng của Version Control System

GitHub:

-   Là nền tảng lưu trữ và quản lý mã nguồn trực tuyến
-   Cho phép push (đẩy) Git repository lên cloud
-   Hỗ trợ cả private repository (chỉ người được mời) và public repository (ai cũng xem được)
-   Có đầy đủ tính năng của VCS
-   Cung cấp thêm các tính năng collaboration như:
    -   Pull Request
    -   Issue Tracking
    -   Code Review
    -   Project Management

Ví dụ về quy trình làm việc cơ bản:

1. Tạo repository trên GitHub
2. Clone về máy: `git clone https://github.com/username/repo.git`
3. Tạo branch mới: `git checkout -b feature/login`
4. Code và commit changes:

    ```bash
    git add .
    git commit -m "Add login feature"
    ```

5. Push lên GitHub: `git push origin feature/login`
6. Tạo Pull Request để merge code

## 3 vùng trạng thái

Sau khi chạy git init thì ta có 3 vùng sau:

-   Working Directory: Thư mục làm việc hiện tại
-   Staging: Vùng tạm để chuẩn bị commit
-   Repository: Nơi lưu trữ lịch sử các version

Ví dụ:

1. Working Directory:

    ```bash
    # Tạo file mới
    echo "Hello" > file.txt
    ```

2. Staging Area:

    ```bash
    # Đưa file vào staging
    git add file.txt
    ```

3. Repository:

    ```bash
    # Commit file vào repository
    git commit -m "Add file.txt"
    ```

## Câu lệnh hay dùng

```bash
# Khởi tạo repository
git init

# Thêm file vào staging
git add <file_name>

# Thêm tất cả file vào staging
git add .

# Kiểm tra trạng thái
git status

# Commit changes
git commit -m "message"

# Kiểm tra lịch sử commit
git log
```

## Javascript Basic

Biến là biên thiên, có thể thay đổi, cập nhật. Hằng số `const` thì cố định sau khi khai, không thay đổi được.
Cố gắng đừng đặt tên chứa từ khoá của JS hoặc là dùng kí tự lạ, đừng đặt tên trùng. Đừng xài var vì var trong vùng global, dễ gây lỗi sau này.

### Khai báo biến

```js
// Khai báo biến
let name = 'Nguyen Dang Khoa';
name = 'Michael Jackson'; // OK

// Khai báo hằng
const PI = 3.14;
PI = 3.15; // Error!

// Không nên dùng var
var x = 10; // Không khuyến khích
```

### Kiểu dữ liệu trong JS

Kiểu nguyên thuỷ (Primitive): là kiểu có sẵn trong JS. có 8 kiểu: boolean, null, undefined, number, string, symbol.

Ví dụ:

```js
// Boolean
let isActive = true;

// Number
let age = 25;
let price = 99.99;

// String
let greeting = 'Hello';

// Null
let empty = null;

// Undefined
let notDefined;

// Symbol
let sym = Symbol('mySymbol');
```

### Toán tử so sánh

```js
let a = 5;
let b = 10;

// So sánh
console.log(a < b); // true
console.log(a > b); // false
console.log(a <= 5); // true
console.log(b >= 10); // true
console.log(a == '5'); // true
console.log(a === '5'); // false
console.log(a != b); // true
console.log(a !== '5'); // true
```

### Unary operator

```js
let i = 1;
console.log(i++); // In ra 1, sau đó i = 2
console.log(++i); // Tăng i lên 3, sau đó in ra 3
```

### Arithmetic operator

```js
let x = 10;
let y = 3;

console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.333...
```

### Conditional

```js
let score = 75;

// if
if (score >= 90) {
    console.log('Xuất sắc');
}

// if...else
if (score >= 70) {
    console.log('Đạt');
} else {
    console.log('Không đạt');
}

// if...else if...else
if (score >= 90) {
    console.log('A');
} else if (score >= 80) {
    console.log('B');
} else if (score >= 70) {
    console.log('C');
} else {
    console.log('F');
}

// switch...case
let day = 2;
switch (day) {
    case 1:
        console.log('Thứ hai');
        break;
    case 2:
        console.log('Thứ ba');
        break;
    default:
        console.log('Ngày khác');
}
```

### Loops

```js
// For loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// While loop
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}

// Do-while loop
let num = 1;
do {
    console.log(num);
    num++;
} while (num <= 3);
```

### Format code

Window: Alt+Shift+F

Hoặc cài đặt Prettier và cấu hình:

```json
{
    "prettier.singleQuote": true,
    "prettier.tabWidth": 4,
    "prettier.printWidth": 120
}
```
