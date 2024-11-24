// Написати функцію findLongestWord,
//     яка приймає рядок str і повертає найдовше слово в цьому рядку.
// Якщо таких слів кілька, повернути перше знайдене.

'use strict';

function findLongestWord(str) {
  let biggestWord = '';
  let temporaryWord = '';

  for (let i = 0; i <= str.length; i += 1) {
    if (str[i] !== ' ' && i !== str.length) {
      temporaryWord = temporaryWord + str[i];
    } else if (temporaryWord.length > biggestWord.length) {
      biggestWord = temporaryWord;
      temporaryWord = '';
    } else {
      temporaryWord = '';
    }
  }
  return biggestWord;
}

// Приклади використання:
console.log(findLongestWord('The quick brown fox jumps over the lazy dog')); // "jumps"
console.log(findLongestWord('JavaScript is awesome')); // "JavaScript"
console.log(findLongestWord('I love coding')); // "coding"
