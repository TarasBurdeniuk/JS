// Реализуйте функцию, которая принимает на вход два аргумента - количество нулей и количество единиц, и определяет сколько есть способов размещения этих нулей и единиц так, что бы не было двух нулей идущих подряд.
//
//     Например, определим все способы размещения двух нулей и двух единиц. Существует шесть возможных способов размещения: 0011, 0101, 0110, 1001, 1010, 1100. В трех случаях содержится два нуля, идущих подряд: 0011, 1001 и 1100. Вычитаем их из общего числа и получаем три возможных способа: 0101, 0110 и 1010. Ответ - 3.

const withoutTwoZeros = (zero, one) => {
    const factorial = number => {
        let fac = 1;
        for (let i = number; i >= 1; i--) {
            fac *= i;
        }
        return fac;
    };

    let allVar = factorial(zero + one);

    let withoutRepeat = allVar / (factorial(one) * factorial(zero));

    return (zero === 2) ? withoutRepeat - (zero + one - 1) : withoutRepeat;
};

console.log(withoutTwoZeros(2, 2)); // 3
console.log(withoutTwoZeros(1, 1)); // 2
console.log(withoutTwoZeros(1, 3)); // 4
console.log(withoutTwoZeros(2, 4)); // 10