// Написати функцію extractNumber,
// яка приймає рядок str і повертає перше число,
// знайдене в рядку.Якщо число не знайдено,
// функція повинна повертати null.

'use strict';

function extractNumber(str) {
  let fakeNum = '';
  for (let i = 0; i < str.length; i += 1) {
    if (Number(str[i])) {
      fakeNum = fakeNum + str[i];
    }
  }

  if (fakeNum === '') {
    return null;
  } else {
    return Number(fakeNum);
  }
}

// Приклади використання:
console.log(extractNumber('abc123def')); // 123
console.log(extractNumber('no numbers here')); // null
console.log(extractNumber('42 is the answer')); // 42
