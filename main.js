for (let i = 0; i <5; i++) {
    console.log(i);
}

// 1. Используя цикл for, выведите числа от 1 до 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Выведите только чётные числа
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 3. Подсчитайте сумму чисел от 1 до 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);

let count = 0;

while (count < 3) {
    console.log("Count:", count);
    count++;
}
//5.5
let number = 5;

while (number > 0) {
    console.log(number);
    number--;
}
//5.6
let doValue = 0;
do {
    console.log("Value:", doValue);
    doValue++;
} while (doValue < 3); 
//5.7
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
//5.8
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    if (i === 8) {
        break;
    }
    console.log(i);
}
//5.9
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}
// 5.10
for (let i = 1; i <= 4; i++) {
    let row = '';
    for (let j = 0; j < i; j++) {
        row += '*';
    }
    console.log(row);
}