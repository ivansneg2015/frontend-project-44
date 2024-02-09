const findGCD = (a, b) => {
  const a = a;
  const b = b;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const playGcd = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${num1} ${num2}`);
  const correctAnswer = findGCD(num1, num2);
  return correctAnswer;
};

export default playGcd;
