const generateProgression = (length) => {
  const progression = [];
  const start = Math.floor(Math.random() * 100);
  const step = Math.floor(Math.random() * 10) + 1;

  for (let i = 0; i < length; i++) {
    const number = start + step * i;
    progression.push(number);
  }

  return progression;
};

const hideNumber = (progression, position) => {
  const hiddenProgression = [...progression];
  hiddenProgression[position] = '..';
  return hiddenProgression;
};

const playProg = () => {
  const length = Math.floor(Math.random() * 6) + 5;
  const progression = generateProgression(length);
  const position = Math.floor(Math.random() * length);
  const hiddenProgression = hideNumber(progression, position);
  const correctAnswer = progression[position];
  console.log(`Question: ${hiddenProgression.join(' ')}`);
  return correctAnswer;
};

export default playProg;
