import readlineSync from 'readline-sync';

const playGame = (game, question) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${question}`);

  let correctAnswers = 0;
  const maxQuestions = 3;

  while (correctAnswers < maxQuestions) {
    const correctAnswer = game();
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toString() === correctAnswer.toString()) {
      correctAnswers += 1;
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
