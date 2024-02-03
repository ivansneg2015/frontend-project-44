const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
  };
  
  export const playPrime = () => {   
    const randomNumber = Math.floor(Math.random() * 100) + 1;  
    console.log(`Question: ${randomNumber}`);  
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no'; 
    return correctAnswer;
  };