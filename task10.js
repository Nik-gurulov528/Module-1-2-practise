// Написати функцію countOccurrences, яка приймає два аргументи:
// рядок str і символ char.Функція повинна повертати кількість входжень
// символу char у рядку str.

'use strict';

function countOccurrences(str, char) {
  let numOfChars = 0;

  while (str.includes(char)) {
    numOfChars += 1;
    str = str.slice(0, str.indexOf(char)) + str.slice(str.indexOf(char) + 1);
  }
  return numOfChars;
}

// Приклади використання:
console.log(countOccurrences('Hello, world!', 'o')); // 2
console.log(countOccurrences('JavaScript', 'a')); // 2
console.log(countOccurrences('12345', '3')); // 1
