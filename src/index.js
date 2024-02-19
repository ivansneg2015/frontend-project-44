import readlineSync from 'readline-sync';

export const getRandomNumber = (number) => Math.floor(Math.random() * number);

const playGame = (game, question) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${question}`);
  const maxQuestions = 3;
  for (let i = 0; i < maxQuestions; i += 1) {
    const { correctAnswer, number1, number2, operator } = game();
    if (correctAnswer === 'yes' || correctAnswer === 'no') console.log(`Question: ${number1}`);
    else if (number2 === undefined) console.log(`Question: ${number1.join(' ')}`);
    else if (operator === undefined) console.log(`Question: ${number1} ${number2}`);
     else console.log(`Question: ${number1} ${operator} ${number2}`);
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
