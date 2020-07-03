'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {

  let parsedPercent = parseInt(percent);
  let parsedContribution = parseInt(contribution);
  let parsedAmount = parseInt(amount);

  if (Number.isNaN(parsedPercent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
  } else if (Number.isNaN(parsedContribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
  } else if (Number.isNaN(parsedAmount)) {
    return `Параметр "Сумма кредита" содержит неправильное значение ${amount}`;

    //Нужно ли было проверять дату? Просто в поле с датой нельзя ввести не числа. Если да, то не совсем понимаю как. ПарсИнт, боюсь, поломает введённые значения, и не получится посчитать количество месяцев потомя

  } else {
  let credit = parsedAmount - parsedContribution;
  let monthQuantity = (date.getFullYear() - new Date().getFullYear()) * 12 + date.getMonth() - new Date().getMonth();
  let amountPerMonth = credit * ((percent / 100 / 12) + (percent / 100 / 12) / (Math.pow(1 + percent / 100 / 12, monthQuantity) - 1));
  let totalAmount = (amountPerMonth * monthQuantity).toFixed(2);
  console.log(totalAmount);
  return Number(totalAmount);
  }
}

function getGreeting(name) {
  if (Boolean(name)) {
    return `Привет, мир! Меня зовут ${name}`;
  } else {
    return `Привет, мир! Меня зовут Аноним`;
  }
}
