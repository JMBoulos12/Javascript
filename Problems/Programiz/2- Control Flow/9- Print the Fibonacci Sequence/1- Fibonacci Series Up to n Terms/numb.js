



/*
  A fibonacci sequence is written as:

  0, 1, 1, 2, 3, 5, 8, 13, 21, ...
  The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. 
  After that, the next term is defined as the sum of the previous two terms.
  
  Output  :
  Enter the number of terms: 4
  Fibonacci Series:
  0
  1
  1
  2

  In this pgram, the user is prompted to enter the numbers of terms that they want in the Fibonacci series.

  The for loop iterates up to the number entered by the user.

  0 is printed at first. Then, in each iteration, the value of the second term is stored in variable n1 and the sum of two previous terms is stored in variable n2.

  17-March-2023
*/


// program to generate fibonacci series up to n terms

// take input from the user
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
