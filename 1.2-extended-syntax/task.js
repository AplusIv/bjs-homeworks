'use strict';

function getResult(a,b,c){
  let x = [];
  let D = Math.pow(b, 2) - 4 * a * c;
  if (D < 0) {
    x;
  } else if (D === 0) {
    x.push(-b / (2 * a));
  } else if (D > 0) {
    x.push((-b + Math.pow(D, 0.5)) / (2 * a));
    x.push((-b - Math.pow(D, 0.5)) / (2 * a));
  }
  return x;
}

function getAverageMark(marks){
  let averageMark;
  if (marks.length === 0) {
    averageMark = 0;
  } else if (marks.length > 5) {
    console.log("Количество оценок превысило 5");//Почему-то не выводится сообщение. Как я понял, в index.html предусмотрен только вывод среднего значения. Но как тогда вывести сообщение о превышении оценок по-другому, я не пойму.
    let maxMarksQuantity = marks.slice(0, 5);
    let sumMarks = 0;
    for (let i = 0; i < maxMarksQuantity.length; i++) {
      sumMarks = sumMarks + maxMarksQuantity[i];
    }
    averageMark = sumMarks / maxMarksQuantity.length;
  } else if (marks.length <= 5) {
    let sumMarks = 0;
    for (let i = 0; i < marks.length; i++) {
      sumMarks = sumMarks + marks[i];
    }
    averageMark = sumMarks / marks.length;
  }
  return averageMark;
}

function askDrink(name,dateOfBirthday){
  let yearOfBirthday = dateOfBirthday.getFullYear();
  let today = new Date;
  let yearOfToday = today.getFullYear();
  let result;
  result = (yearOfToday - yearOfBirthday) > 18 ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  return result;
    // код для задачи №3 писать здесь
    // return result;
}
