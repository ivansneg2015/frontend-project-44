import playGame from '../index.js';

import getRandomNumber from '../randomnumber.js';

const generateProgression = (firstItem, step, length) => {
  const array = [];
  for (let i = 0; i < length; i += 1) {
    const result = (firstItem + (step * i));
    array.push(result);
  }
  return array;
};
function playProgression() {
  const first = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const progression = generateProgression(first, step, length);
  const randIndex = Math.floor(Math.random() * progression.length);
  const correctAnswer = `${progression[randIndex]}`;
  progression[randIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
}

const gameRules = 'What number is missing in the progression?';

export default () => playGame(playProgression, gameRules);
