// Реализуйте функцию isPowerOfThree, которая определяет, является ли переданное число натуральной степенью тройки. Например, число 27 это третья степень (33), а 81 это четвертая (34).

const isPowerOfThree = (number) => {
    if (number % 3 === 0) {
        return isPowerOfThree(number / 3);
    }
    return (number === 1 || number === 0);
};

console.log(isPowerOfThree(1)); // true (3^0)
console.log(isPowerOfThree(2)); // false
console.log(isPowerOfThree(9)); // true (3^2)
console.log(isPowerOfThree(27)); // true (3^3)
console.log(isPowerOfThree(72)); // false