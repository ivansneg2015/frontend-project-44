import playGame from '../index.js';

import getRandomNumber from '../randomnumber.js';

const operands = ['+', '-', '*'];

const expression = (num1, operand, num2) => {
  switch (operand) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
       throw new Error(`Unknown operand: '${operand}'!`);
  }
};
const playCalculate = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const randomOperand = operands[getRandomNumber(0, operands.length - 1)];
  const question = `${num1} ${randomOperand} ${num2}`;
  const correctAnswer = `${expression(num1, randomOperand, num2)}`;
  return [question, correctAnswer];
};

const gameRules = 'What is the result of the expression?';

export default () => playGame(playCalculate, gameRules);
