// Напишите функцию-конструктор Accumulator(startingValue). Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.
//
//     Более формально, объект должен:
//
//     Хранить текущее значение в своём свойстве value. Начальное значение свойства value ставится конструктором равным startingValue.
//     Метод read() вызывает prompt, принимает число и прибавляет его к свойству value.
//     Таким образом, свойство value является текущей суммой всего, что ввел посетитель при вызовах метода read(), с учетом начального значения startingValue.

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt('number', '0');
        return this.value;
    };
}


let accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert(accumulator.value); // выведет текущее значение