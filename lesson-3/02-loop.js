//ex1: tinh tong tu 1 toi 100

let sum = 0;

for (let i = 0; i <= 100; i++) {
    sum = sum + i;
}

//ex2: in bang cuu chuong tu 2 toi 9
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

//ex3: tao mot mang chua cac so le tu 1 toi 99

let arrWithOddNumbers = [];

for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
        arrWithOddNumbers.push(i);
    }
}

console.log(arrWithOddNumbers); //[1,3,5,...,97,99]

//ex4: In ra 10 email dựa trên tên người dùng và số thứ tự

let emails = [];

let emailUserName = 'user';

for (let i = 1; i <= 10; i++) {
    emails.push(`${emailUserName}${i}@example.com`);
}

for (let i = 0; i < emails.length; i++) {
    console.log(emails[i]);
}

// ex5: Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu.

const revenueOf12Months = [
    { month: 1, total: 100 },
    { month: 2, total: 200 },
    { month: 3, total: 300 },
    { month: 4, total: 400 },
    { month: 5, total: 500 },
    { month: 6, total: 600 },
    { month: 7, total: 700 },
    { month: 8, total: 800 },
    { month: 9, total: 900 },
    { month: 10, total: 100 },
    { month: 11, total: 200 },
    { month: 12, total: 300 },
];

let sumRevenue = 0;

for (let i = 0; i < revenueOf12Months.length; i++) {
    sumRevenue = sumRevenue + revenueOf12Months[i].total;
}

console.log(sumRevenue); //5100
