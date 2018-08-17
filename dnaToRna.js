// ДНК и РНК это последовательности нуклеотидов.
//
//     Четыре нуклеотида в ДНК это аденин (A), цитозин (C), гуанин (G) и тимин (T).
//
//     Четыре нуклеотида в РНК это аденин (A), цитозин (C), гуанин (G) и урацил (U).
//
//     Цепь РНК составляется на основе цепи ДНК последовательной заменой каждого нуклеотида:
//
//      G -> C
//      C -> G
//      T -> A
//      A -> U
// dnaToRna.js
// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход цепь ДНК и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).
//
// Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка), то функция должна вернуть пустую строку. Если в переданной цепи ДНК встретится "незнакомый" нуклеотид (не являющийся одним из четырех перечисленных выше), то функция должна вернуть null.
//
// dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
// dnaToRna('CCGTA'); // 'GGCAU'
// dnaToRna(''); // ''
// dnaToRna('ACNTG'); // null


const dnaToRna = (str) => {
    let result = '';
    if (str === '') return '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'G') {
            result += 'C';
        } else if (str[i] === 'C') {
            result += 'G';
        } else if (str[i] === 'T') {
            result += 'A';
        } else if (str[i] === 'A') {
            result += 'U';
        } else {
            return null;
        }
    }
    return result;
};

console.log(dnaToRna('ACGTGGTCTTAA'));
console.log(dnaToRna('CCGTA')); // 'GGCAU'
console.log(dnaToRna('')); // ''
console.log(dnaToRna('ACNTG')); // null