// Написати функцію capitalizeEverySecondChar,
// яка приймає рядок str і повертає новий рядок,
// у якому кожен другий символ є великим.

'use strict';

function capitalizeEverySecondChar(str) {
  let smallStr = str.toLowerCase();
  let finalStr = '';
  let letter = '';

  for (let i = 0; i < smallStr.length; i += 1) {
    letter = smallStr[i];

    if (i % 2 === 1) {
      letter = letter.toUpperCase();
      finalStr = finalStr + letter;
    } else {
      finalStr = finalStr + smallStr[i];
    }
  }
  return finalStr;
}

// Приклади використання:
console.log(capitalizeEverySecondChar('hello world')); // "hElLo wOrLd"
console.log(capitalizeEverySecondChar('javascript')); // "jAvAsCrIpT"
console.log(capitalizeEverySecondChar('1234567890')); // "1234567890'
