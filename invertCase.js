// Реализуйте и экспортируйте по умолчанию функцию invertCase, которая меняет в строке регистр каждой буквы на противоположный.


const invertCase = string => {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i].toUpperCase() === string[i]) {
            result += string[i].toLowerCase();
        } else {
            result += string[i].toUpperCase();
        }
        // it's second variant, but little harder to read
        //result = (string[i].toUpperCase() === string[i]) ? result += string[i].toLowerCase() : result += string[i].toUpperCase();
    }
    return result;
};

console.log(invertCase('Hello, World!')); // hELLO, wORLD!
console.log(invertCase('I loVe JS')); // i LOvE js