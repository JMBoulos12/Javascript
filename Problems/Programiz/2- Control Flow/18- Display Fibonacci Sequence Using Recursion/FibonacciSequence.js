



/*
  A fibonacci sequence is written as:

  0, 1, 1, 2, 3, 5, 8, 13, 21, ...
  The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. 
  After that, the next term is defined as the sum of the previous two terms. 
  Hence, the nth term is the sum of (n-1)th term and (n-2)th term.
  
  Output  :
  Enter the number of terms: 5
  0
  1
  1
  2
  3
  In the above program, a recursive function fibonacci() is used to find the fibonacci sequence.

  The user is prompted to enter a number of terms up to which they want to print the Fibonacci sequence(here 5).
  The if...else statement is used to check if the number is greater than 0.
  If the number is greater than 0, a for loop is used to calculate each term recursively (calls the fibonacci() function again).

  17-March-2023
*/


// program to display fibonacci sequence using recursion
function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

// take nth term input from the user
const nTerms = prompt('Enter the number of terms: ');

if(nTerms <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }
}
