//  Напиши цикл, який пропонує ввести число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не введе число більше 100,
//   або не натисне кнопку "Відміна"

'use strict';

let num = 0;

do {
  num = prompt('Please, enter number, which is bigger than 100: ');
} while (num <= 100);
