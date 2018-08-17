// Реализуйте функцию, которая переворачивает строку задом наперед, используя рекурсию.

const reverseString = (str) => {
    return str.length - 1 ? reverseString(str.slice(1)) + str[0] : str;
};
console.log(reverseString('str')); // rts
console.log(reverseString('hexlet')); // telxeh