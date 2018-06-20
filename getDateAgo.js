// Создайте функцию getDateAgo(date, days), которая возвращает число, которое было days дней назад от даты date.
    let date = new Date();
    const getDateAgo = (date, days) => {
    
        date.setDate(date.getDate() - days);
        return date.getDate();
    };
    
    console.log(getDateAgo(date, 3));