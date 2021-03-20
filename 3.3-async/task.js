class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      // this.timerId;
			this.timerId = null; // ??? Изначально по задаче подразумевалось задавать значение null или оставлять пустым? Я сначала задал пустым, но тогда проверки немного другие будут в последующих методах. 
    } 
  
    addClock(time, callback, id) {
      if (id === undefined) {
        throw new Error('Будильник задан неверно: параметр id не передан');
      } // ??? Если параметр не передан - проверять на undefined? Или другое решение подразумевалось?
      if (this.alarmCollection.find(item => item.id === id)) {
        console.error('Будильник с таким id уже существует');
        return;
      }
      this.alarmCollection.push({id, time, callback}); // В сокращенной форме добавляем объект будильника
    }
  
    removeClock(id) {
      let removedIndex = this.alarmCollection.findIndex(item => item.id === id);
      console.log(removedIndex);
      if (removedIndex !== -1) {
        this.alarmCollection.splice(removedIndex, 1);
        return true; // ??? Или в задании имеется в виду вернуть как-то иначе "логическое значение об успешности/провале удаления объекта звонка из общего массива"
      } else {
        return false;
      }
    }
  
    getCurrentFormattedTime() {
      const currentDate = new Date();
      const hours = currentDate.getHours() < 10 ? '0' + currentDate.getHours() : currentDate.getHours();
      const minutes = (currentDate.getMinutes() < 10) ? '0' + currentDate.getMinutes() : currentDate.getMinutes();
      return `${hours}:${minutes}`;    
    }
  
    start() {
      // let that = this;
      console.log(this.timerId);
      if (this.timerId === null) {
        this.timerId = setInterval(() => {
        this.alarmCollection.forEach((item) => checkClock2(item));
        }, 3000);
  
  
        // ??? Хочу уточнить, почему я могу воспользовать функцией checkClock2 в setInterval до того, как я её фактически объявляю? Почему интерпретатор не выдал ошибку?
        let checkClock2 = (clock) => {
          if (clock.time === this.getCurrentFormattedTime()) {
            return clock.callback();
          }
        }
      } else {
        console.log('timerId уже существует');
        }; // timerId уже задан      
				
      /* function checkClock(clock) {
        if (clock.time === that.getCurrentFormattedTime()) {
          return clock.callback(); // не могу закрепить this, поэтому переменная that
        }
      } */
    }
  
    stop() {
      if (this.timerId !== null) {
        clearInterval(this.timerId);
        // ??? как очистить свойство? Есть ли соответствующий метод (я не нашёл). Или вручную задавать null? Я поставил null, т.к. всё равно осуществляется проверка на наличие свойства в методе start(). НО выгляит как-то не очень.
        this.timerId = null;
      }
    }
  
    printAlarms() {
      let result = `Общее количество будильников: ${this.alarmCollection.length}\n`;
      this.alarmCollection.forEach(item => result += ` Будильник №${item.id} заведён на ${item.time}\n`);
      console.log(result);
    }
  
    clearAlarms() {
      stop();
      this.alarmCollection = [];
    } 
  }
  
  
  
  let testCase = new AlarmClock();
  console.log(testCase);
  
  // testCase.addClock('12:45', () => console.log('Вставай, потарапливайся'));
  testCase.addClock('18:12', () => console.log('Вставай, потарапливайся'), 1);
  testCase.addClock('12:45', () => console.log('Вставай, потарапливайся'), 1);
  
	testCase.addClock('18:13', () => { console.log('Вставай, потарапливайся, хватит спать'); testCase.removeClock(2) }, 2);
	testCase.addClock('18:14', () => console.log('Уже можно не торопиться))'), 23);
  
	testCase.addClock('18:14', () => { console.log('Вставай, потарапливайся, хватит спать, удалю все будильники и ничего не выведу на консоль!'); testCase.stop(); testCase.clearAlarms(); testCase.printAlarms(); }, 3435);


  // testCase.removeClock(5);
  // console.log(testCase.removeClock(5));
  // testCase.removeClock(2);
  // console.log(testCase.removeClock(2));
  
  testCase.getCurrentFormattedTime();
  console.log(testCase.getCurrentFormattedTime());
  
	testCase.printAlarms();

  testCase.start();
  // console.log(testCase.start());
  console.log(testCase);  
