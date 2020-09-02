'use strict';

console.log('Задание №1\n');

function parseCount(value) {
  if (isNaN(Number.parseInt(value, 10))) {
    //const parsedValueError = new Error("Невалидное значение");
    //throw parsedValueError;
    throw new Error("Невалидное значение");
  }

  return Number.parseInt(value, 10);
};

console.log(parseCount(234));
console.log(parseCount('1324'));
console.log(parseCount('7475a83646'));
//console.log(parseCount(''));
//console.log(parseCount('red'));



function validateCount(value) {
  try {
    return parseCount(value);
  } catch(e) {
    //return e.message;
    /* У объекта Error есть свойства name(вызовет Error, м.б. SyntaxError и т.д. в зависимости от выбранного объекта ошибок), message (выводит перехватываемый текст ошибки из блока try функции parseCount) и stack */
    return e;
  }
}
console.log(validateCount(100));
console.log(validateCount(''));

console.log('Задание №2\n');

class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    };
    this.a = a;
    this.b = b;
    this.c = c;
  }
  getPerimeter() {
    return this.a + this.b + this.c;
  }
  getArea() {
    let p = this.getPerimeter() / 2;
    let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return area.toFixed(3);
  }
}

let triangle0 = new Triangle(3, 4, 5);
console.log(triangle0);
//let triangle1 = new Triangle(2, 3, 9);
//let triangle2 = new Triangle(2, 10, 3);
//let triangle3 = new Triangle(20, 3, 9);
console.log(triangle0.getPerimeter());
console.log(triangle0.getArea());
//console.log(triangle0);
let triangle4 = new Triangle(2, 5, 5);
console.log(triangle4);
console.log(triangle4.getPerimeter());
console.log(triangle4.getArea());
let triangle5 = new Triangle(6, 10, 15);
console.log(triangle5);
console.log(triangle5.getPerimeter());
console.log(triangle5.getArea());
console.log(triangle5);


function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);//Находит class Triangle во внешней области видимости функции getTriangle, проверяет на условие сторон треугольника в конструкторе класса]
  } catch(e) {
    //return e.message;
    e.message = "Ошибка! Треугольник не существует";
    e.a = function getPerimeter() {
      return e.message;
    }
    e.b = function getArea() {
      return e.message;
    }
    console.log(e);
    /*let triangle7 = {
      getPerimeter: function() {
        let errorMessage = "Ошибка! Треугольник не существует";
        return errorMessage;
      },
      getArea: function() {
        let errorMessage = "Ошибка! Треугольник не существует";
        return errorMessage;
      }
    };
    */
    /*
    triangle.getPerimeter = function() {
      let error = "Ошибка! Треугольник не существует";
      return error;
    };
    triangle.getArea = function() {
      let error = "Ошибка! Треугольник не существует";
      return error;
    };
    */
    //console.log(triangle7);
    //console.log('Ошибка 3232');
  }
}

console.log(getTriangle(2,5,5));
let triangle6 = getTriangle(2,5,5);
console.log(triangle6.getPerimeter());
console.log(triangle6.getArea());

console.log(getTriangle(1,3,100));
let triangle7 = getTriangle(1,3,100);
console.log(e.getPerimeter());
console.log(e.getArea());
