



/*
  Similarly, if you want to find the random integer in between min (inclusive) to max (inclusive), you can use the following formula:

  Math.floor(Math.random() * (max - min + 1)) + min
  
  Output  :
  Enter a min value: 1
  Enter a max value: 50
  Random value between 1 and 50 is 47
  
  This will show the integer output between min (inclusive) to max (inclusive).

  17-March-2023
*/


// input from the user
const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));

// generating a random number
const a = Math.floor(Math.random() * (max - min + 1)) + min;

// display a random number
console.log(`Random value between ${min} and ${max} is ${a}`);
