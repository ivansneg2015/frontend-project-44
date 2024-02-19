import playGame, { getRandomNumber } from '../index.js';

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
  const number1 = getRandomNumber(100);
  const correctAnswer = isPrime(number1) ? 'yes' : 'no';
  return { correctAnswer, number1 };
};

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => playGame(playPrime, question);
