// Сумма квадратов первых десяти натуральных чисел это 12 + 22 + 32 + ... + 10 2 = 385.
//
// Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)2 = 552 = 3025.
//
// Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.
//
// Напишите функцию sumSquareDifference, которая принимает аргумент n и возвращает разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.


function sumSquareDifference(number) {
    let a = 0;
    let b = 0;
    for (let i = 1; i <= number; i++) {
        a += Math.pow(i, 2);
        b += i;
    }
    return Math.pow(b, 2) - a;
}

console.log(sumSquareDifference(3));
console.log(sumSquareDifference(5));
console.log(sumSquareDifference(34));