// Реализуйте и экспортируйте по умолчанию функцию, которая выводит (console.log) в терминал числа в диапазоне от begin до end. При этом:
//
//     Если число делится без остатка на 3, то вместо него выводится слово Fizz
// Если число делится без остатка на 5, то вместо него выводится слово Buzz
// Если число делится без остатка и на 3, и на 5, то вместо числа выводится слово FizzBuzz
// В остальных случаях выводится само число
// Функция принимает два параметра (begin и end), определяющих начало и конец диапазона (включительно). Если диапазон пуст (в случае, когда begin > end), то функция просто ничего не печатает.


const fizzbuzz = (begin, end) => {
    let result = "";
    for (let i = begin; i < end; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            result += 'FizzBuzz\n';
        }
        else if (i % 3 === 0) {
            result += 'Fizz\n';
        }
        else if (i % 5 === 0) {
            result += 'Buzz\n';
        }
        else {
            result += i + '\n';
        }
    }
    return result;
};

console.log(fizzbuzz(10, 23));