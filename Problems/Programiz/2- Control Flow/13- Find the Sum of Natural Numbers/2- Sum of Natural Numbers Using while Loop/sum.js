



/*
  Output  :
  Enter a positive integer: 100
  The sum of natural numbers: 5050
  
  In the above program, the user is prompted to enter a number.

  The while loop is used to find the sum of natural numbers.

  * The while loop continues until the number is less than or equal to 100.
  * During each iteration, i is added to the sum variable and the value of i is increased by 1.
  * When i becomes 101, the test condition is false and sum will be equal to 0 + 1 + 2 + ... + 100.

  17-March-2023
*/


// program to display the sum of natural numbers

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

let sum = 0, i = 1;

// looping from i = 1 to number
while(i <= number) {
    sum += i;
    i++;
}

console.log('The sum of natural numbers:', sum);
