# Summary

## Version control system

VCS là hệ thống quản lý các phiên bản. Có 3 loại VCS: Local, Centralize, Distributed

## Git

Dùng Git để quản lý phiên bản với collab với nhiều người.

## Git và GitHub

Git là phần mềm trên máy tính, có thể chạy trên command line, là công cụ quản lý phiên bản, đưa file vào Git repository, có các tính năng của Version Control System.

GitHub là một trang web có giao diện để ta upload git repository lên cho mọi người trên internet thấy (nếu public), có các tính năng của VCS và một số tính năng khác.

## 3 vùng trạng thái

Sau khi chạy git init thì ta có 3 vùng sau:

- Working Directory
- Staging
- Repository

## Câu lệnh hay dùng

```bash
git init
```

```bash
git add <file_name>
```

```bash
git add .
```

```bash
git status
```

```bash
git commit -m "message"
```

Kiểm tra lịch sử commit

```bash
git log
```

## Javascript Basic

 Biến là biên thiên, có thể thay đổi, cập nhật. Hằng số `const` thì cố định sau khi khai, không thay đổi được.
Cố gắng đừng đặt tên chứa từ khoá của JS hoặc là dùng kí tự lạ, đừng đặt tên trùng. Đừng xài var vì var trong vùng global, dễ gây lỗi sau này.

### Khai báo

```js 
let name = 'Nguyen Dang Khoa';
name = "Michael Jackson";
```

### Đừng thay đổi hằng số 

const sau khi khai thì không đổi được

```JS
const birthYear = 1999;
birthYear = 2001;

//báo lỗi
```


### Kiểu dữ liệu trong JS 

Kiểu nguyên thuỷ (Primitive): là kiểu có sẵn trong JS. có 8 kiểu: boolean, null, undefined, number, string, symbol.

Kiểu dữ liệu đối tượng: là kiểu do người dùng tạo ra.


### Kiểu nguyên thuỷ (primitive)

boolean là true hoặc false

null là rỗng

undefined là giá trị chưa được định nghĩa

number là đại diện cho tất cả loại số

kiểu string cho giá trị chuỗi

### Toán tử so sánh 

<,>,>=,<=,==,===,!=,!==

### Unary operator

i++ và ++i. i++ sử dụng rồi mới tăng, ++i tăng trước khi sử dụng

### Arithmetic operator 

Là phép toán: +,-,*,/

### Conditional

- if
- if...else
- if...else...if
- Switch...case

### Loops

thực hiện một logic gì đó n lần.

### Format code 

Window: Alt+Shift+F

hoặc là cài Prettier.









