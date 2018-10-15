// Счастливым билетом называют такой билет с шестизначным номером, где сумма первых трех цифр равна сумме последних трех.
//
//     Например, билет с номером 385916 - счастливый, так как 3 + 8 + 5 = 9 + 1 + 6
//
// Напишите функцию, проверяющую является ли номер счастливым (номер может быть как числового, так и строкового типа. Функция должна возвращать true, если билет счастливый, или false, если нет.

const isHappyTicket = number => {
    number = String(number);
    let a = number.substring(0, 3);

    let b = number.substring(3);

    let aNumber = 0;
    for (let i = 0; i < a.length; i++) {
        aNumber += Number(a[i]);
    }

    let bNumber = 0;
    for (let i = 0; i < b.length; i++) {
        bNumber += Number(b[i]);
    }
    return (aNumber === bNumber);
};

console.log(isHappyTicket(385916)); // true
console.log(isHappyTicket(231002)); // false
console.log(isHappyTicket(128722)); // true
console.log(isHappyTicket('054702')); // true