const getRandomNumber = (min, max) => { 
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, 2);
  return operators[randomIndex];
};

const calculateExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
  }
};

export const playCalculate = () => {
  const number1 = getRandomNumber(1, 20);
  const number2 = getRandomNumber(1, 20);
  const operator = getRandomOperator();
  const correctAnswer1 = calculateExpression(number1, number2, operator);
  console.log(`Question: ${number1} ${operator} ${number2}`);
  return correctAnswer1;
};
