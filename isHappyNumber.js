// Назовем счастливыми числами те, которые в результате ряда преобразований вида "сумма квадратов цифр" превратятся в единицу. Например:
//
//     7   => 7^2 = 49,
//     49  => 4^2 + 9^2 = 16 + 81 = 97,
//     97  => 9^2 + 7^2 = 81 + 49 = 130,
//     130 => 1^2 + 3^2 + 0^2 = 10,
//     10  => 1^2 + 0^2 = 1.
// Вывод: исходное число 7 - счастливое.
//
//     isHappyNumber.js
// Реализуйте функцию, которая должна вернуть true, если число счастливое, и false, если нет. Количество итераций процесса поиска необходимо ограничить числом 10.


const isHappyNumber = (number) => {
    let count = 1;
    let a = Math.pow(number, 2);
    while (count !== 10) {
        if (a === 1) {
            return true;
        } else {
            a = '' + a;
            let b = 0;
            for (let i = 0; i < a.length; i++) {
                b += Math.pow(a[i], 2);
            }
            ++count;
            a = b;
        }
    }
    return false;
};

console.log(isHappyNumber(5));
console.log(isHappyNumber(7));
console.log(isHappyNumber(14));