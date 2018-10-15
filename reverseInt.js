// Реализуйте и экспортируйте по умолчанию функцию reverseInt, которая переворачивает цифры в переданном числе и возвращает новое число.

const reverseInt = number => {

    let rev = String(number).split('');
    let result = [];

    for (let i = rev.length; i >= 0; i--) {
        if (rev[i] === '-') {
            result.unshift(rev[i]);
        } else {
            result.push(rev[i]);
        }
    }
    return result.join('');
};

console.log(reverseInt(13)); // 31
console.log(reverseInt(-123)); // -321