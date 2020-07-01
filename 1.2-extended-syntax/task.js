'use strict';

function getResult(a,b,c){
  let x = [];
  let D = Math.pow(b, 2) - 4 * a * c;
    if (D === 0) {
    x.push(-b / (2 * a));
  } else if (D > 0) {
    x.push((-b + Math.sqrt(D)) / (2 * a));
    x.push((-b - Math.sqrt(D)) / (2 * a));
  }
  return x;
}

function getAverageMark(marks){
  marks = marks.slice(0, 5);
  if (marks.length === 0) {
    return 0;
  } else {
    let sumMarks = 0;
    for (let i = 0; i < marks.length; i++) {
      sumMarks += marks[i];
    }
    return sumMarks / marks.length;
  }
}

function askDrink(name,dateOfBirthday){
  let result;
  result = new Date().getFullYear() - dateOfBirthday.getFullYear() > 18 ? `Не желаете ли олд-фэшн, ${name}?` :
  `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  return result;// Честно говоря, не совсем вас понял, как избавиться от переменной result и сразу озвращать результат тернарного оператора. Пробовал без нее, но в таком случае мне оператор возвращает просто true/false.
}
