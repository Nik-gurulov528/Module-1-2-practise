// Написати функцію extractBetween, яка приймає три аргументи:
// рядок str, підрядок start і підрядок end.Функція повинна повертати частину рядка
// між першим входженням підрядка start і підрядка end.Якщо один з підрядків не знайдено,
//   функція повинна повертати порожній рядок.

'use strict';

function extractBetween(str, start, end) {
  if (str.includes(start) && str.includes(end)) {
    return str.slice(str.indexOf(start) + 1, str.indexOf(end));
  } else {
    return '';
  }
}

// Приклади використання:
console.log(extractBetween('Hello, [world]!', '[', ']')); // "world"
console.log(extractBetween('Hello, [world]!', '{', '}')); // ""
console.log(extractBetween('Hello, {world}!', '{', '}')); // "world"
