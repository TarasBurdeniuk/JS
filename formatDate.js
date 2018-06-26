// Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг:
// P.S. Обратите внимание, ведущие нули должны присутствовать, то есть 1 января 2001 должно быть 01.01.01, а не 1.1.1.

let date = new Date;

const formatDate = (date) => {

    //     options = {
    //         year: '2-digit',
    //         month: '2-digit',
    //         day: '2-digit',
    //     };
    //     return date.toLocaleString("en-US", options);
    // };

    let day = date.getDate();
    if (day < 10)
        day = '0' + day;
    let mm = date.getMonth() + 1;
    if (mm < 10)
        mm = '0' + mm;
    let year = date.getFullYear() % 100;
    if (year < 10)
        year = '0' + year;
    return day + '.' + mm + '.' + year;
};

console.log(formatDate(date));