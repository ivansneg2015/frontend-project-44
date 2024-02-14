import playGame from '../index.js';

import { getRandomNumber } from '../index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(3);
  return operators[randomIndex];
};

const calculateExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 0;
  }
};

const playCalculate = () => {
  const number1 = getRandomNumber(100);
  const number2 = getRandomNumber(100);
  const operator = getRandomOperator();
  const correctAnswer1 = calculateExpression(number1, number2, operator);
  console.log(`Question: ${number1} ${operator} ${number2}`);
  return correctAnswer1;
};

const question = 'What is the result of the expression?';

export default () => playGame(playCalculate, question);
