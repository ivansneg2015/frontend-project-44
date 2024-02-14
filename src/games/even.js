import playGame from '../index.js';

import { getRandomNumber } from '../index.js';

const playEven = () => {
  const number = getRandomNumber(100);
  console.log(`Question: ${number}`);
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => playGame(playEven, question);
