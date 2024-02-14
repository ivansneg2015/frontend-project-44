import playGame from '../index.js';

import { getRandomNumber } from '../index.js';

const playGcd = () => {
  const num1 = getRandomNumber(100);
  const num2 = getRandomNumber(100);
  console.log(`Question: ${num1} ${num2}`);
  let tempNum1 = num1;
  let tempNum2 = num2;
  while (tempNum1 !== tempNum2) {
    if (tempNum1 > tempNum2) {
      tempNum1 -= tempNum2;
    } else {
      tempNum2 -= tempNum1;
    }
  }
  const correctAnswer = tempNum1;
  return correctAnswer;
};

const question = 'Find the greatest common divisor of given numbers.';

export default () => playGame(playGcd, question);
