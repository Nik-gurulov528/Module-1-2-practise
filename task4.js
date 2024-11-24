// Написати функцію removeSubstring, яка приймає два аргументи:
// рядок str і підрядок substr.Функція повинна повертати новий рядок,
//   у якому перше входження підрядка буде видалено.Якщо підрядок не знайдено,
//     функція повинна повертати оригінальний рядок.

'use strict';

function removeSubstring(str, substr) {
  if (str.includes(substr)) {
    return (
      str.slice(0, str.indexOf(substr)) +
      str.slice(str.indexOf(substr) + substr.length)
    );
  } else {
    return str;
  }
}

// Приклади використання:
console.log(removeSubstring('Hello, world!', 'world')); // "Hello, !"
console.log(removeSubstring('Hello, world!', 'JavaScript')); // "Hello, world!"
console.log(removeSubstring('Hello, world!', 'Hello')); // ", world!"
