const playGcd = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${num1} ${num2}`);
  let tempNum1 = num1;
  let tempNum2 = num2;
  while (tempNum1 !== tempNum2) {
    if (tempNum1 > tempNum2) {
      tempNum1 -= tempNum2;
    } else {
      tempNum2 -= tempNum1;
    }
  }
  const correctAnswer = tempNum1;
  return correctAnswer;
};

export default playGcd;
