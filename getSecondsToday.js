// Напишите функцию getSecondsToday() которая возвращает, сколько секунд прошло с начала сегодняшнего дня.
//
//     Например, если сейчас 10:00 и не было перехода на зимнее/летнее время, то:
//
// getSecondsToday() == 36000 // (3600 * 10)

const getSecondsToday = () => {
    let date = new Date();
    let start = new Date;
    start.setHours(0, 0, 0, 0);

    return (Math.floor((date - start) / 1000));
};

console.log(getSecondsToday());