//Дано рядок, який складається із символів.Напишіть функію
// яка перевіряє, що першим символом цього рядка є літера 'a'.
//  Якщо це так - вивести "так", у іншому випадку вивести "ні"

'use strict';

const string = 'abcde'; // тестовий рядок 1
const stringSecond = 'bcde'; // тестовий рядок 2

function checkSymbol(str) {
  if (str[0] === 'a') {
    return 'так';
  } else {
    return 'ні';
  }
}

console.log(checkSymbol(string));
console.log(checkSymbol(stringSecond));
