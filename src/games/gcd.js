import playGame, { getRandomNumber } from '../index.js';

const playGcd = () => {
  const number1 = getRandomNumber(100);
  const number2 = getRandomNumber(100);
  let tempNum1 = number1;
  let tempNum2 = number2;
  while (tempNum2 !== 0) {
     const temp =tempNum2;
     tempNum2 = tempNum1 % tempNum2;
     tempNum1 = temp;
    }
  const correctAnswer = tempNum1;
  return { correctAnswer, number1, number2 };
};

const question = 'Find the greatest common divisor of given numbers.';

export default () => playGame(playGcd, question);
