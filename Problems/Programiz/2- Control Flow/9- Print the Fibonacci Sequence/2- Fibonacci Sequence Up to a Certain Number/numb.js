



/*
  Output  :
  Enter a positive number: 5
  Fibonacci Series:
  0
  1
  1
  2
  3
  5
  
  In the above example, the user is prompted to enter a number up to which they want to print the Fibonacci series.

  The first two terms 0 and 1 are displayed beforehand. 
  Then, a while loop is used to iterate over the terms to find the Fibonacci series up to the number entered by the user.

  17-March-2023
*/


// program to generate fibonacci series up to a certain number

// take input from the user
const number = parseInt(prompt('Enter a positive number: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

while (nextTerm <= number) {

    // print the next term
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}
