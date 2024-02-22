import playGame from '../index.js';

import getRandomNumber from '../randomnumber.js';

const isEven = (num) => num % 2 === 0;

const playEven = () => {
  const tempNumber = getRandomNumber(1, 100);
  const question = `${tempNumber}`;
  const correctAnswer = isEven(tempNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => playGame(playEven, gameRules);
