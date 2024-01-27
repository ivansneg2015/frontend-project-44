import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

export const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if ((isEven(number) && userAnswer === 'yes') || (!isEven(number) && userAnswer === 'no')) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven(number) ? 'yes' : 'no'}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
