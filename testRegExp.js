// В этом задании в нашу функцию testRegExp первым параметром передается случайная строка(переменная s), а вторым - случайная подстрока(переменная sub_s), которую нужно использовать в качестве шаблона регулярного выражения. Вам нужно вернуть из функции строку, в которой будут перечислены через запятую все совпадения шаблона с первой строкой.


const testRegExp = (s, sub_s) => s.match(new RegExp(sub_s, 'g')).join(',');

console.log(testRegExp('Andsirdaarrevarariarewbutovearrmararan', 'ar'));
console.log(testRegExp('Extremitiyasiifbrieakfaistagreement', 'i'));