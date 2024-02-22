import playGame from '../index.js';

import getRandomNumber from '../randomnumber.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const playPrime = () => {
  const number = getRandomNumber(1, 100);
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => playGame(playPrime, gameRules);
