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
  const randomNumber = getRandomNumber(100);
  console.log(`Question: ${randomNumber}`);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return correctAnswer;
};

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => playGame(playPrime, question);
