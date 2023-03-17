



/*
  We can use this value in the range (0,1) to find the random value between any two numbers using formula:
  Math.random() * (highestNumber - lowestNumber) + lowestNumber
  
  Output  :
  Random value between 1 and 10 is 7.392579122270686
  This will show a random floating-point number greater than 1 and less than 10.
  
  17-March-2023
*/


// generating a random number
const a = Math.random() * (10-1) + 1
console.log(`Random value between 1 and 10 is ${a}`);
