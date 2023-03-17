



/*
  The positive integers 1, 2, 3, ... are known as natural numbers.
  
  Output  :
  Enter a positive integer: 100
  The sum of natural numbers: 5050
  
  In the above program, the user is prompted to enter a number.

  The parseInt() converts the numeric string value to an integer value.

  The for loop is used to find the sum of natural numbers up to the number provided by the user.

  The value of sum is 0 initially.
  Then, a for loop is used to iterate from i = 1 to 100.
  In each iteration, i is added to sum and the value of i is increased by 1.
  When i becomes 101, the test condition is false and sum will be equal to 0 + 1 + 2 + ... + 100.

  17-March-2023
*/


// program to display the sum of natural numbers

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

let sum = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log('The sum of natural numbers:', sum);
