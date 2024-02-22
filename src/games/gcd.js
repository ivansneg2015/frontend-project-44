import playGame from '../index.js';

import getRandomNumber from '../randomnumber.js';

const Gcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return Gcd(number2, number1 % number2);
};
const playGcd = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = `${Gcd(num1, num2)}`;
  return [question, correctAnswer];
};

const gameRules = 'Find the greatest common divisor of given numbers.';

export default () => playGame(playGcd, gameRules);
