// Реализуйте и экспортируйте по умолчанию функцию, 
// которая делает заглавной первую букву каждого слова в предложении.

const solution = (str) => {
    let word = '';

    for (let i = 0; i < str.length; i += 1) {
        if (str[i] !== ' ' && (i === 0 || str[i - 1] === ' ')) {
            word += str[i].toUpperCase();
            continue;
        }
        word += str[i];
    }
    return word;
};
// export default toUpper;
console.log(solution('hello, world!')); // Hello, World!
