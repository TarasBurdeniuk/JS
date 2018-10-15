// Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.
//
//     День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.

const date = new Date();
const getLocalDay = date => {
    const weekDays = ['7', '1', '2', '3', '4', '5', '6'];

    return weekDays[date.getDay()];
};

console.log(getLocalDay(date));