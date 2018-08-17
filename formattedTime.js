// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход количество минут (прошедших с начала суток) и возвращает строку, являющуюся временем в формате чч:мм.


const formattedTime = (number) => {
    let min = (number >= 60) ? (number % 60) + '' : number + '';

    let h = Math.floor(number / 60) + '';

    let min_1 = (min.length === 1) ? '0' + min : min;

    let h_1 = (h.length === 1) ? '0' + h : h;

    return h_1 + ':' + min_1;
};

console.log(formattedTime(7));
console.log(formattedTime(60));
console.log(formattedTime(1670));