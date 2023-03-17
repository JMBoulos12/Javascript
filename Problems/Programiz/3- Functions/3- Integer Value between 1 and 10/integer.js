



/*
  Output  :
  Random value between 1 and 10 is 2
  This will show integer output between 1 (inclusive) to 10 (exclusive), i.e. (1 to 9). Here, Math.floor() is used to convert decimal to integer value.

  17-March-2023
*/


// generating a random number
const a = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(`Random value between 1 and 10 is ${a}`);
