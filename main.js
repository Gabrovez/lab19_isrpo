// for (let i = 0; i <5; i++) {
//     console.log(i);
// }

// // 1. Используя цикл for, выведите числа от 1 до 10
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// // 2. Выведите только чётные числа
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// // 3. Подсчитайте сумму чисел от 1 до 10
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log(sum);

// let count = 0;

// while (count < 3) {
//     console.log("Count:", count);
//     count++;
// }
// //5.5
// let number = 5;

// while (number > 0) {
//     console.log(number);
//     number--;
// }
// //5.6
// let doValue = 0;
// do {
//     console.log("Value:", doValue);
//     doValue++;
// } while (doValue < 3); 
// //5.7
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }
// //5.8
// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     if (i === 8) {
//         break;
//     }
//     console.log(i);
// }
// //5.9
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }
// // 5.10
// for (let i = 1; i <= 4; i++) {
//     let row = '';
//     for (let j = 0; j < i; j++) {
//         row += '*';
//     }
//     console.log(row);
// }

// //6.2 
// function summ(a, b) {
//     return a + b;
// }

// console.log(summ(3, 5));

// //6.3 
// function multiply(a, b) {
//     return a * b;
// }

// console.log(multiply(4, 6));
// //6.4
// function sayHello(name) {
//     console.log(`Hello, ${name}`);
// }

// sayHello("Тимофей");

// //6.5
// function printInfo(name, age) {
//     console.log(`Имя: ${name}, Возраст: ${age}`);
// }

// printInfo("Ваня", 52);
// // 6.6 
// function greet(name = "Гость") {
//     console.log("Привет, " + name);
// }

// greet();
// greet("Аня");

// //6.7
// function calculateDiscount(price, discount = 10) {
//     return price * (1 - discount / 100);
// }

// console.log(calculateDiscount(100));
// console.log(calculateDiscount(100, 20));

// //6.8
// const add = function (a, b) {
//     return a + b;
// };

// console.log(add(2, 3));

// function makeCounter() {
//     let count = 0;
//     return function () {
//         count++;
//         return count;
//     };
// }

// const counter = makeCounter();
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 

// //6.9
// function sumFunc(a, b) {
//     return a + b;
// }

// const sumFunc2 = (a, b) => a + b;

// const double = x => x * 2;

// const sumFunc3 = (a, b) => a + b;

// const sayGreeting = () => console.log("Hello");

// const square = x => x * x;

// const calculate = (a, b) => {
//     let result = a + b;
//     return result * 2;
// };

//7.2
let numbersArr = [1, 2, 3, 4, 5];
console.log(numbersArr);

//7.3
console.log(numbersArr[0]);
console.log(numbersArr[1]);

//7.4
let colors = ["красный", "зелёный", "синий"];

console.log(colors[0]);
console.log(colors[colors.length - 1]);

colors[1] = "жёлтый";

console.log(colors);

//7.5
console.log(numbersArr.length);

//7.6
numbersArr.push(10);
console.log(numbersArr);

numbersArr.pop();
console.log(numbersArr);
//7.7
let students = [];

students.push("Саня");
students.push("Антон");
students.push("Лёха");

students.pop();

console.log(students);

//7.8
let numbers2 = [10, 20, 30];
for (let i = 0; i < numbers2.length; i++) {
    console.log(numbers2[i]);
}

//7.9
for (let value of numbers2) {
    console.log(value);
}

//7.10
let mixedArray = [1, "text", true, 3.14];
console.log(mixedArray);

//7.11
console.log(numbersArr.includes(1));
console.log(numbersArr.indexOf(2));

// console.log(fruits.includes("яблоко"));
// console.log(fruits.includes("манго"));

//7.12
let cities = ["Москва", "Санкт-Петербург", "Казань"];

let cityToFind = "Казань";

if (cities.includes(cityToFind)) {
    console.log(cities.indexOf(cityToFind));
}
