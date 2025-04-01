//ex1
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021,
};

console.log(car.year);

// ex2
const person = {
    name: 'Khoa',
    address: {
        street: 'Nguyen Trai',
        city: 'Ho Chi Minh',
        country: 'Vietnam',
    },
};

console.log(person.address.street);

//ex3
const student = {
    name: 'Khoa',
    grades: {
        math: 8,
        english: 9,
    },
};

console.log(student['grades']['math']);

//this is better than above
console.log(student.grades.math);

//ex 4
const settings = {
    volume: 70,
    brightness: 50,
};

settings.volume = 80;

console.log(settings);

// ex5
const bike = {
    name: 'Air Blade',
    model: 'AB001',
};

bike.color = 'Black';

//ex 6

const employee = {
    name: 'Khoa',
    age: 25,
};

delete employee.age;

// ex7

const school = {
    classA: ['An', 'Bình', 'Châu'],
    classB: ['Đào', 'Hương', 'Giang'],
};
