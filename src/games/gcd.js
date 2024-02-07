const playGcd = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${num1} ${num2}`);
  const findGCD = (a, b) => {
    let a = num1;
    let b = num2;
    while (num1 !== num2) {
      if (num1 > num2) {
        num1 -= num2;
      } else {
        num2 -= num1;
      }
    }
    return num1;
  };
  const correctAnswer = findGCD(num1, num2);
  return correctAnswer;
};

export default playGcd;
