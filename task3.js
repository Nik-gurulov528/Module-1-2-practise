// Написати функцію extractAfterSubstring,
// яка приймає два аргументи: рядок str і підрядок substr.
// Функція повинна повертати частину рядка, що йде після першого входження підрядка.
// Якщо підрядок не знайдено, функція повинна повертати порожній рядок.

'use strict';

function extractAfterSubstring(str, substr) {
  if (str.includes(substr)) {
    return str.slice(str.indexOf(substr) + substr.length);
  } else {
    return '';
  }
}

// Приклади використання:
console.log(extractAfterSubstring('Hello, world!', 'world')); // "!"
console.log(extractAfterSubstring('Hello, world!', 'JavaScript')); // ""
console.log(extractAfterSubstring('Hello, world!', 'Hello')); // ", world!"
