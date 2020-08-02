'use strict';

//Задание №1
console.log('Задание №1\n');

let str = new String('     А роза упала на лапу Азора    ');

/*for (let prop in str) {
  otherWayStr += str[prop];
}
*/

let otherWayStr = '';
let arr = Object.values(str);
for (let i = arr.length - 1; i >= 0; i--) {
otherWayStr += arr[i];
}
otherWayStr = otherWayStr.replace(/\s/g, '').toLowerCase();


str.primary = str.toString().replace(/\s/g, '').toLowerCase();


str.isPalindrome = isPalindrome();
//console.log(str);

function isPalindrome() {
  //let lowerCaseStr = str.primary.toLowerCase();

  return (otherWayStr === str.primary) ? true : false;
}
//isPalindrome.prototype = str;
//console.log(isPalindrome());

console.log(str);
// Решение считает, но поле на страничке index.html не видит его. Не знаю, что делать. 

// как подвязать код к полю ввода на страничке html, я не совсем понимаю эту связь. Я ввожу данные в форме, их считывает функция проверки. Прокомментируйте, пжлст, мне не совсем понятен этот момент. Как вообще подвязывается код на страницу? Может, у меня функции как-то иначе именованы?Я не знаю в каком направлении думать:)

// Зачем нужен prototype в этой задаче. У нас же Объект, хранящий текстовые данные, и функция её проверки. Разные сущности.

// Не могу разобраться с this. Почему не работает тернарник return (otherWayStr === this.primary) ? true : false; ? Он же находится в функции, которая в свою очередь находится в объекте str.



//String.prototype.isPalindrome - для задачи №1 (Не совсем понял, к чему здесь прототип строки, если тут всего можно воспользоваться одни текстовым Объектом с функцией isPalindrome() в качестве значения условия.)

//Задание №2
console.log('Задание №2\n');

function getAverageMark(marks) {
  //let marksList = Object.values(marks);
  let average = 0;
  if (marks === 0 || marks === '' || marks === [] || marks === undefined || marks === null) {
    return 0;
  } // Прокомментируйте, пжлст, когда оценки не переданы в соответствующее поле, это тип null или undefined
  // Почему не срабатывает проверка на пустой массив marks?
  for (let i = 0; i < marks.length; i++) {
    average += marks[i];
  }
  console.log(average);

  average = average / marks.length;
  let roundedAverage = Math.round(average);
      // код для задачи №2 писать здесь
  return roundedAverage;
}

console.log(getAverageMark([3, 5, 3, 2, 5, 5, 6]));
console.log(getAverageMark(0));
console.log(getAverageMark(null));
console.log(getAverageMark(''));
console.log(`Обратить внимание ${getAverageMark([])}`);


//Задание №3
console.log('Задание №3\n');
function checkBirthday(birthday) {
  let now = new Date().getTime();
  //console.log(`Текущая дата в милисекундах ${now}`);
  birthday = new Date(birthday).getTime();
  //console.log(`Дата дня рождения в милисекундах ${birthday}`);
  let diff = now - birthday;
  //console.log(`Разница в миллисекундах ${diff}`);

  let eighteenYearsMls = 5 * 31622400000 + 13 * 31536000000;
  //console.log(`18 лет в миллисекундах ${eighteenYearsMls}`);

  let verdict;
  return verdict = (diff >= eighteenYearsMls) ? true : false;

/*
  let age = 0;
  for (let i = 0; ; i++ ) {
    if (diff > 31536000000) {
      diff -= 31536000000;
      age += 1;
    } else {
      return age;
    }

  }
  console.log(`Возраст ${age}`);
*/
/*
  let age = Math.floor(diff / 31536000000);
  console.log(`Возраст ${age}`);
  let verdict;
  return verdict = (age >= 18) ? true : false;

  //return console.log(`Текущая дата в милисекундах ${now} и Дата дня рождения в милисекундах ${birthday}`);
    // код для задачи №3 писать здесь
    */
}


console.log(checkBirthday("2001-01-26"));
