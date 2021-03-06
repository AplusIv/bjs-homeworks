'use strict';

console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

// Функция getNames
function getNames() {
  return weapons.map(item => item.name);
}

// Функция getCountReliableWeapons
function getCountReliableWeapons(neededDurability) {
  return weapons.filter(item => item.durability > neededDurability).length;
}

// Функция hasReliableWeapons
function hasReliableWeapons(neededDurability) {
  return weapons.some(item => item.durability > neededDurability);
}

// Функция getReliableWeaponsNames

function getReliableWeaponsNames(neededDurability) {
  let filtredWeapons = (weapons.filter(item => item.durability > neededDurability));
  return filtredWeapons.map(item => item.name);  
}

// Функция getTotalDamage
function getTotalDamage() {
  let damages = weapons.map(item => item.attack);
  return damages.reduce((sum, current) => sum + current, 0);
}

// Функция getValuestCountToSumValues
function getValuestCountToSumValues(array, total) {  
  let copiedArray = array.slice(0); // Клонирую массив, чтобы не ломать исходный массив, передаваемый в функцию getValuestCountToSumValues
  return copiedArray.reduce((sum, current, index) => {
  sum += current;
  if (sum >= total) {
    let result = index + 1; // количество элементов на единицу больше индекса
    copiedArray.splice(index + 1); // ??? Обрезаю массив, чтобы reduce() прекратил суммировать дальше по массиву и менять индекс. Это правильное решение или как-то по-другому можно останавливать метод reduce()?
    // console.log(copiedArray);
    // console.log(array);
    console.log(`количество чисел = ${index + 1}, total = ${sum}`);
    return result;
    } else if (sum < total && index === copiedArray.length - 1) {
      console.log(`суммы элементов массива не хватает. Длина массива ${copiedArray.length}`)
      return copiedArray.length;
    } else {
      return sum; // Чтобы продолжались иттерации reduce();
    }    
  }, 0);
}

// Задание №2

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на 1 секунду.
  sleep(1000); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((item, index) => item === arr2[index]);
}

function memorize(fn, limit) {
  const memory = [];
  return (...args) => {
    const searchingHistory = memory.find(item => compareArrays(item.args, args));
    if (searchingHistory) {
    //   console.log(memory);
      return searchingHistory.result;
    } else {
      const result = fn(...args);
      const memoryItem = {args: args, result: result};
      if (memory.length < limit) {
        memory.push(memoryItem);
      } else {
        memory.shift();
        memory.push(memoryItem);
      }
    //   console.log(memory);
      return result;
    }
  }
}

// ??? По заданию "Переданная функция fn не должна вызываться более одного раза. Иначе вместо оптимизации вычисления только увеличатся.". 
// Что имеется в виду? Я же её постоянно вызываю, передавая новые аргументы в mSum и когда нет совпадений в memory.

