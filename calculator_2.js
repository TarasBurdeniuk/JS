// Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.
//
//     Эта задача состоит из двух частей, которые можно решать одна за другой.
//
//     Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2», с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции), и возвращает результат. Понимает плюс + и минус -.
// Второй шаг – добавить калькулятору метод addMethod(name, func), который учит калькулятор новой операции. Он получает имя операции name и функцию от двух аргументов func(a,b), которая должна её реализовывать.

function Calculator_2() {
    this.calculate = function (str) {
        let num = str.split('');

        return (num[2] === "+") ? +num[0] + +num[4] : +num[0] - +num[4];
    };
    this.addMethod = function (name, func) {
        this[name] = func;
    }
}

let calc = new Calculator_2;
let powerCalc = new Calculator_2;
powerCalc.addMethod("*", function (a, b) {
    return a * b;
});
powerCalc.addMethod("/", function (a, b) {
    return a / b;
});
powerCalc.addMethod("**", function (a, b) {
    return Math.pow(a, b);
});

powerCalc.addMethod("**", function (a, b) {
    return Math.pow(a, b);
});

console.log(calc.calculate("3 - 1")); // 2