



/*
  Output  :
  Enter first number: 5
  Enter second number: 5.5
  Enter third number: 5.6
  The largest number is 5.6
  
  Math.max() returns the largest number among the provided numbers.

  You can use Math.min() function to find the smallest among the numbers.

  24-March-2023
*/


// program to find the largest among three numbers

// take input from the user
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));

const largest = Math.max(num1, num2, num3);

// display the result
console.log("The largest number is " + largest);
