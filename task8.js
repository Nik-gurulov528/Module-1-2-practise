// Написати функцію removeCharacter, яка приймає два аргументи:
// рядок str і символ char.Функція повинна повертати новий рядок,
//   у якому всі входження символу char видалені. Використовуйте цикл while

'use strict';

function removeCharacter(str, char) {
  while (str.includes(char)) {
    str = str.slice(0, str.indexOf(char)) + str.slice(str.indexOf(char) + 1);
  }
  return str;
}

// Приклади використання:
console.log(removeCharacter('Hello, world!', 'o')); // "Hell, wrld!"
console.log(removeCharacter('JavaScript', 'a')); // "JvScript"
console.log(removeCharacter('12345', '3')); // "1245"
