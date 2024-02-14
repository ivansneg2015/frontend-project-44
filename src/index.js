import readlineSync from 'readline-sync';

export const getRandomNumber = (number) => Math.floor(Math.random() * number);

const playGame = (game, question) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${question}`);

  for ( let i = 0; i < 3; i += 1) {
    const correctAnswer = game();
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toString() === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGame;
