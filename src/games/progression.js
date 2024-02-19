import playGame, { getRandomNumber } from '../index.js';

const generateProgression = (length) => {
  const progression = [];
  const start = getRandomNumber(100);
  const step = getRandomNumber(10) + 1;

  for (let i = 0; i < length; i += 1) {
    const number = start + step * i;
    progression.push(number);
  }

  return progression;
};

const hideNumber = (progression, position) => {
  const hiddenProgression = [...progression];
  hiddenProgression[position] = '..';
  return hiddenProgression;
};

const playProgression = () => {
  const length = getRandomNumber(6) + 6;
  const progression = generateProgression(length);
  const position = getRandomNumber(length);
  const hiddenProgression = hideNumber(progression, position);
  const correctAnswer = progression[position];
  const number1 = hiddenProgression;
  return { correctAnswer, number1 };
};

const question = 'What number is missing in the progression?';

export default () => playGame(playProgression, question);
