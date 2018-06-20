// Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.
    let date = new Date();
    
    const getWeekDay = (date) => {
    
        const weekDays = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    
        return weekDays[date.getDay()];
    };
    
    console.log(getWeekDay(date));