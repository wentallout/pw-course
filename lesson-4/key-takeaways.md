# Lesson 4: JavaScript Utils Functions

## String Utils (Xử lý chuỗi)

### 1. trim() → string
Xóa khoảng trắng đầu/cuối chuỗi
```js
" hello ".trim() // "hello"
```

### 2. toLowerCase()/toUpperCase() → string
Chuyển chuỗi thành chữ thường/hoa
```js
"Hello".toLowerCase() // "hello"
"hello".toUpperCase() // "HELLO"
```

### 3. includes(searchString) → boolean
Kiểm tra chuỗi có chứa chuỗi con không
```js
"hello world".includes("world") // true
```

### 4. replace(search, replace) → string
Thay thế chuỗi con đầu tiên tìm thấy
```js
"hello world".replace("world", "there") // "hello there"
```

### 5. replaceAll(search, replace) → string
Thay thế tất cả chuỗi con
```js
"1,2,3".replaceAll(",", ".") // "1.2.3"
```

### 6. split(separator) → array
Tách chuỗi thành mảng dựa vào ký tự phân cách
```js
"a,b,c".split(",") // ["a", "b", "c"]
```

### 7. substring(start, end) → string
Trích xuất chuỗi con từ vị trí start đến end-1
```js
"hello".substring(0, 2) // "he"
```

### 8. indexOf(searchString) → number
Tìm vị trí đầu tiên của chuỗi con (-1 nếu không tìm thấy)
```js
"hello".indexOf("l") // 2
```

## Array Utils (Xử lý mảng)

### 1. map(callback) → array
Biến đổi từng phần tử thành phần tử mới
```js
[1, 2, 3].map(x => x * 2) // [2, 4, 6]
```

### 2. filter(callback) → array
Lọc phần tử theo điều kiện
```js
[1, 2, 3].filter(x => x > 1) // [2, 3]
```

### 3. find(callback) → element
Tìm phần tử đầu tiên thỏa điều kiện
```js
[1, 2, 3].find(x => x > 1) // 2
```

### 4. reduce(callback, initialValue) → any
Gộp các phần tử thành một giá trị
```js
[1, 2, 3].reduce((sum, x) => sum + x, 0) // 6
```

### 5. some(callback) → boolean
Kiểm tra có ít nhất 1 phần tử thỏa điều kiện
```js
[1, 2, 3].some(x => x > 2) // true
```

### 6. every(callback) → boolean
Kiểm tra tất cả phần tử thỏa điều kiện
```js
[1, 2, 3].every(x => x > 0) // true
```

### 7. push(element)/pop() → number/element
Thêm/xóa phần tử cuối mảng
```js
let arr = [1, 2]
arr.push(3) // arr = [1, 2, 3]
arr.pop() // arr = [1, 2]
```

### 8. unshift(element)/shift() → number/element
Thêm/xóa phần tử đầu mảng
```js
let arr = [1, 2]
arr.unshift(0) // arr = [0, 1, 2]
arr.shift() // arr = [1, 2]
```

## Vòng lặp

### 1. for...in
Lặp qua các thuộc tính của object
```js
const obj = {a: 1, b: 2}
for (const key in obj) {
    console.log(key) // "a", "b"
}
```

### 2. for...of
Lặp qua các phần tử của mảng/chuỗi
```js
for (const item of [1, 2, 3]) {
    console.log(item) // 1, 2, 3
}
```

### 3. break/continue
- break: thoát khỏi vòng lặp
- continue: bỏ qua phần còn lại, sang vòng lặp tiếp
```js
for (let i = 0; i < 3; i++) {
    if (i === 1) continue
    if (i === 2) break
    console.log(i) // 0
}
```


