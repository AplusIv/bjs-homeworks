'use strict';

//Задание №1
console.log('Задание №1\n');


String.prototype.isPalindrome = function() {
  let str = this;
  let otherWayStr = '';
  let arr = Object.values(this);
  for (let i = arr.length - 1; i >= 0; i--) {
  otherWayStr += arr[i];
  }
  otherWayStr = otherWayStr.replace(/\s/g, '').toLowerCase();
  str = this.toString().replace(/\s/g, '').toLowerCase();

  return (otherWayStr === str) ? true : false;
}


//Задание №2
console.log('Задание №2\n');

function getAverageMark(marks) {
  //let marksList = Object.values(marks);
  let summary = 0;
  if (marks === 0 || marks === '' || marks === [] || marks === undefined || marks === null || marks === NaN) {
    return 0;
  } // Прокомментируйте, пжлст, когда оценки не переданы в соответствующее поле, это тип null или undefined
  // !!!! Почему не срабатывает проверка на пустой массив marks?
  for (let i = 0; i < marks.length; i++) {
    summary += marks[i];
  }

  let average = summary / marks.length;
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
  let nowMls = new Date().getTime();
  //console.log(`Текущая дата в милисекундах ${nowMls}`);
  let birthdayMls = new Date(birthday).getTime();
  //console.log(`Дата дня рождения в милисекундах ${birthdayMls}`);
  let diff = nowMls - birthdayMls;
  //console.log(`Разница в миллисекундах ${diff}`);

  let eighteenYearsMls = 5 * 31622400000 + 13 * 31536000000;
  //console.log(`18 лет в миллисекундах ${eighteenYearsMls}`);

  //let verdict;
  //return verdict = (diff >= eighteenYearsMls) ? true : false;

  return diff >= eighteenYearsMls;
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


//console.log(checkBirthday("2001-01-26"));
