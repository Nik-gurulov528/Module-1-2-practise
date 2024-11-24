// Написати функцію removeVowelsFromWords,
//   яка приймає рядок str і повертає новий рядок,
//     у якому з кожного слова видалені всі голосні букви.

'use strict';

const vowels = 'aeiouAEIOU';

function removeVowelsFromWords(str) {
  for (let i = 0; i < vowels.length; i += 1) {
    while (str.includes(vowels[i])) {
      str =
        str.slice(0, str.indexOf(vowels[i])) +
        str.slice(str.indexOf(vowels[i]) + 1);
    }
  }
  return str;
}

// Приклади використання:
console.log(removeVowelsFromWords('Hello, world!')); // "Hll, wrld!"
console.log(removeVowelsFromWords('JavaScript is awesome!')); // "JvScrpt s wsm!"
console.log(removeVowelsFromWords('Remove vowels from words')); // "Rmv vwls frm wrds"
