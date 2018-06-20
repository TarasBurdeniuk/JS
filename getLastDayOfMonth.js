// Напишите функцию getLastDayOfMonth(year, month), которая возвращает последний день месяца.
    
    //     Параметры:
    
    // year – 4-значный год, например 2012.
    // month – месяц от 0 до 11.
    // Например, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

    const getLastDayOfMonth = (year, month) => {
        let lastDay = new Date(year, month + 1);
        lastDay.setDate(lastDay.getDate() - 1);
        return lastDay.getDate();
    };
    
    console.log(getLastDayOfMonth(2016, 6));