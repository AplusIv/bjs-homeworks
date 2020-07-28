'use strict';

console.log('\nЗадание 1');

function getSolutions(a, b, c) {
  let D = Math.pow(b, 2) - 4 * a * c;
  if (D < 0) {
    return { D: D, roots: [] };
  } else if (D === 0) {
    let x1 = -b / (2 * a);
    return { D: D, roots: [ x1 ] };
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    return { D: D, roots: [ x1, x2 ] };
  }
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.roots.length === 0) {
    console.log('Уравнение не имеет вещественных корней');
  } else if (result.roots.length === 1) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else if (result.roots.length === 2) {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(1, 0, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);


//Задание 2
console.log('\nЗадание 2');

function getAverageMark(marks) {
  if (marks === undefined || marks.length === 0) {
    return 0;
  }
  let total = 0;
    for (let i = 0; i < marks.length; i++) {
      total += marks[i];
      //console.log(total);
    }
    return total / marks.length;
}

/*
console.log(getAverageMark([1, 4, 7]));
console.log(getAverageMark());
console.log(getAverageMark([]));
console.log(getAverageMark([1, 1]));
*/


function getAverageScore(data) {
  let scoreBoard = {};
  let total = [];
  for (let lesson in data) {
    scoreBoard[lesson] = getAverageMark(data[lesson]);
    //console.log(`Покажись ${scoreBoard[lesson]}`);
    total.push(scoreBoard[lesson]);
    //console.log(total);
  }
  scoreBoard.average = getAverageMark(total);
  return scoreBoard;
}
console.log(getAverageScore({
  algebra: [3, 2, 4],
  russian: [5, 3],
  //french: undefined,
  //german: [],
  //geometry: [1, 3, 4, 4, 5, 2, 4, 3, 5, 5]
}));


// Задание 3
console.log('\nЗадание 3');

function getDecodedValue(secret) {
  return secret ? 'Эмильо' : 'Родриго';
}
//console.log(getDecodedValue(1));
//console.log(getDecodedValue(0));

/* function getPersonData(secretData) {
  let result = {};
  for (let prop in secretData) {
    result[prop] = getDecodedValue(secretData[prop]);
    }
    return result;
}
*/
function getPersonData(secretData) {
  return {
    firstName: getDecodedValue(secretData.aaa),
    lastName: getDecodedValue(secretData.bbb),
  }
} // Написал 2 варианта функции getPersonData(). Обе собирают нужный объект, но, мне кажется, первая функция более элегантная и универсальная.
// Тест проходит только вторая функция (видимо, потому что так написан тест). Что скажете? Может, можно как-то улучшить код?

console.log(getPersonData({
  aaa: 1,
  bbb: 0,
}));

console.log(getPersonData({
  aaa: 0,
  bbb: 0
}));

console.log(getPersonData({
  aaa: 0,
  bbb: 1
}));

console.log(getPersonData({
  aaa: 1,
  bbb: 1
}));
