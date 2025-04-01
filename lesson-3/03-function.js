//Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau.
function multiply(a, b) {
    console.log(a * b);
}

multiply(2, 3);
multiply(4, 5);

//ex2: Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả với 2 bộ số khác nhau.
function findMin(a, b, c) {
    return Math.min(a, b, c);
}
findMin(1, 2, 3);
findMin(6, 4, 5);

/* ex3 Viết hàm getTopStudents nhận 2 tham số:
● students: mảng các object, mỗi object chứa name (tên) và score (điểm).
● threshold: ngưỡng điểm để được coi là "top" (số).
Hàm trả về mảng mới chứa tên của những học sinh có điểm >= threshold.
Gọi hàm với danh sách thực tế và in kết quả. */

const studentsArr = [
    {
        name: 'Khoa',
        score: 7,
    },
    {
        name: 'Thom',
        score: 8,
    },
    {
        name: 'Tue',
        score: 6,
    },
    {
        name: 'Quang',
        score: 9,
    },
];

const schoolThreshold = 8;

function getTopStudents(students, threshold) {
    // Tạo mảng mới để chứa kết quả
    let topStudents = [];

    // Duyệt qua từng học sinh
    for (let i = 0; i < students.length; i++) {
        // Nếu điểm >= threshold thì thêm vào mảng kết quả
        if (students[i].score >= threshold) {
            topStudents.push(students[i].name);
        }
    }

    return topStudents;
}

getTopStudents(studentsArr, schoolThreshold);

console.log(getTopStudents(studentsArr, schoolThreshold));

/* ex4: Viết hàm calculateInterest nhận 3 tham số:
● principal: số tiền gửi ban đầu (số).
● rate: lãi suất hàng năm (phần trăm, ví dụ 5 nghĩa là 5%).
● years: số năm gửi.
Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm, sử dụng công thức lãi
đơn: total = principal + principal * rate * years / 100. Gọi hàm với ví dụ thực tế và
in kết quả. */

function calculateInterest(principal, rate, years) {
    const total = principal + (principal * rate * years) / 100;
    return total;
}

console.log(calculateInterest(1000, 5, 2));

console.log(calculateInterest(2000, 3, 3));
