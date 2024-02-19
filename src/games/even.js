import playGame, { getRandomNumber } from '../index.js';

const playEven = () => {
  const number1 = getRandomNumber(100);
  if (number1 % 2 === 0) {
    const correctAnswer = 'yes';
    return { correctAnswer, number1 };
  }
  const correctAnswer = 'no';
  return { correctAnswer, number1 };
};

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => playGame(playEven, question);
