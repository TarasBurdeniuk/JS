// Создайте функцию isPerfect, которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.
//
//     Совершенное число — это положительное целое число, равное сумме его положительных делителей (не считая само число). Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.

const isPerfect = number => {
    let result = 0;
    for (let i = 0; i < number; i += 1) {
        if (number % i === 0) {
            result += i;
        }
    }
    return result === number;
};

console.log(isPerfect(6));
console.log(isPerfect(23));
console.log(isPerfect(28));
console.log(isPerfect(33550336));