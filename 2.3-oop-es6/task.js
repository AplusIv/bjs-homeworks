'use strict';

console.log('Задание №1\n');

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
    //Если правильно понимаю, получается, перезаписываю свойство state новым свойством _state. Дальше во всех экземплярах в названии свойства фигурирует только оно. Нельзя как-то вернуть первичное наименование state без нижнего подчёркивания?
  }

  get state() {
    return this._state;
  }
}

/*
let boo = new PrintEditionItem('Makar', 2006, 213);
console.log(boo);
console.log(boo.state);
boo.state = 40;
console.log(boo.state);
console.log(boo);

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock);
console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100
*/

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

/*
let mag = new Magazine('cherry', 2017, 150);
console.log(mag);
console.log(mag.type);
*/

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

/*
let bookkk = new Book('Warrant', 'cherry Pie', 2017, 1460);
console.log(bookkk);
console.log(bookkk.type);
*/

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}
/*
const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 13;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

console.log(picknick);
*/

console.log('Задание №2\n');

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let item of this.books) {
      /*if (item[type] === value) {
        return item;
      } else return null;*/
      if (item[type] === value) {
        return item;
        }
      } // когда не находит совпадений метод возвращает undefined, что логично, нет соответствующего item. Но если я пытаюсь задать условие else ruturn null, если совпадения не найдены - он возвращает результат поиска по первому объекту из массива (могу ошибаться), цикл прекращается и возвращает null. Как сделать иначе, не совсем пойму, чтобы всё равно дошёл до конца массива, а то у меня останавливается на первом индексе.
      // У меня была догадка, что, возможно, здесь можно использовать метод forEach(), но я не совсем понимаю его синтаксис (как его прописать). Может быть, здесь как раз он?
  }

  giveBookByName(bookName) {
    for (let item of this.books) {
      if (bookName === item.name) {
        let indexBook = this.books.indexOf(item);
        let givenBook = this.books.splice(indexBook, 1);
        return givenBook;
      } /*else {
        return null;
      }*/ // Как вернуть null, если книга не найдена?? Что я не так делаю? Условие не выполняется - вернуть null. Проверял в консоли мой вариант не работает (условие ложное - цикл прервался). Корректно работает только, если книга есть в списке и без else. Опять же forEach()???
    }
  }

  }


/*
let lib = new Library("Главная библиотека");
console.log(lib);
lib.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
lib.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
lib.addBook(new Magazine("Мурзилка", 1924, 60));
console.log(lib);
let mag = new Magazine("Brest", 2020, 50);
mag.state = 10;
mag.fix();
console.log(mag);
lib.addBook(mag);
console.log(lib);

console.log(lib.findBookBy("name", "Властелин колец")); //null
console.log(lib.findBookBy("releaseDate", 1924).name); //"Мурзилка"
console.log(lib.findBookBy("pagesCount", 1008));
console.log(lib.findBookBy("name", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе"));
console.log(lib.findBookBy("name", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе").name);
console.log(lib.findBookBy("author", "Аркадий и Борис Стругацкие"));
console.log(lib.findBookBy("author", "Аркадий и Борис Стругацкие").author);


console.log("Количество книг до выдачи: " + lib.books.length); //Количество книг до выдачи: 3
//lib.giveBookByName("Пикник на обочине");
console.log(lib.giveBookByName("Пикник на обочине"));
console.log(lib);
console.log("Количество книг после выдачи: " + lib.books.length); //Количество книг после выдачи: 2
*/

console.log('Задание №3\n');

class StudentLog {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    if (typeof grade === 'number' && grade >= 1 && grade <= 5) {
      if (this.hasOwnProperty(subject)) {
        this[subject].push(grade);
      } else {
        this[subject] = [grade];
      }
      return this[subject].length;
    } else {
      console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
      if (this[subject] === undefined) {
        return 0;
      } else {
        return this[subject].length;
      }
    }
  }

  getAverageBySubject(subject) {
    if (this.hasOwnProperty(subject)) {
      let sumGradesBySubject = 0
      for (let i = 0; i < this[subject].length; i++) {
        sumGradesBySubject += this[subject][i];
        console.log(`Сумма оценок по предмету '${subject}' равна '${sumGradesBySubject}'`);
      }
      let averageBySubject = sumGradesBySubject / this[subject].length;
      return averageBySubject;
    } else {
      return 0;
    }
  }

  getTotalAverage() {
    let gradesArray = [];
    for (let prop in this) {
      let value = this[prop];
      if (value === undefined || typeof(value) === 'string') {
        gradesArray = [0];
      }
      if (prop !== 'name' && value !== undefined) { //Array.isArray(value)
        for(let grade of value) {
          gradesArray.push(grade);
          console.log(gradesArray);
        }

        //return gradesArray;

      } /*else {
        return null;
      } */
      //return gradesArray;
    }
    console.log(`show me ${gradesArray}`);
    for (let grade of gradesArray) {
      if (grade === 0 && gradesArray.length > 1) {
        gradesArray.splice(grade, 1);
      } /*else {
        gradesArray;
      }*/

    }
    console.log(gradesArray.length);
    console.log(gradesArray);
    let sumGrades = 0;
    for (let grade of gradesArray) {
      sumGrades += grade;
    }
    let totalAverage = sumGrades / gradesArray.length;

    return totalAverage;
  }
}

/*
const log = new StudentLog('Олег Никифоров');
console.log(log);
console.log(log.getName());


console.log(log.addGrade(5, 'History'));
console.log(log);

console.log(log.addGrade(4, 'History'));
console.log(log);

console.log(log.addGrade(5, 'History'));
console.log(log);

console.log(log.addGrade(2, 'Filosophy'));
console.log(log);


console.log(log.addGrade(22, 'Filosophy'));
console.log(log);
console.log(log.addGrade(NaN, 'Physics'));
console.log(log);
console.log(log.addGrade('A', 'Physics'));
console.log(log);

console.log(log.getAverageBySubject('History')); // 4.666666666
console.log(log.getAverageBySubject('Filosophy')); // 2
console.log(log.getAverageBySubject('Math')); // 0
*/

console.log(log.getTotalAverage());// 4
