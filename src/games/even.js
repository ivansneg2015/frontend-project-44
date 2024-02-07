export const playEven = () => {
const number = Math.floor(Math.random() * 100);
console.log(`Question: ${number}`);
 if (number % 2 === 0) {
  return 'yes';
 } else {
  return 'no';
  }
 };
