



/*
  This program can also be written using a ternary operator.
  
  Output  :
  Enter a number: 5
  The number is odd.

  17-March-2023
*/


// program to check if the number is even or odd
// take input from the user
const number = prompt("Enter a number: ");

// ternary operator
const result = (number % 2  == 0) ? "even" : "odd";

// display the result
console.log(`The number is ${result}.`);
