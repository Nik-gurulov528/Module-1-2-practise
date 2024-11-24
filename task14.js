// Написати функцію hasUniqueChars,
//     яка приймає рядок str і повертає true,
//     якщо всі символи в рядку унікальні, і false в іншому випадку.

'use strict';

function hasUniqueChars(str) {
  for (let i = 0; i < str.length; i += 1) {
    for (let q = 0; q < str.length; q += 1) {
      if (str[i] === str[q] && i !== q) {
        return false;
      }
    }
  }
  return true;
}

// Приклади використання:
console.log(hasUniqueChars('abcdef')); // true
console.log(hasUniqueChars('hello')); // false
console.log(hasUniqueChars('1234567890')); // true
