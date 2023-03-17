



/*
  Output  :
  Enter a positive integer: 92727
  92727 is an Armstrong number

  In this program, an Armstrong number of n digits is checked.

  When the user enters a number, it is taken as a string. 
  The length property returns the length of a string.

  The number entered by the user is stored in a temp variable. And a while loop is used to iterate until its value is less than 0. 
  Each digit of the number is raised to the power of the length of the number.

  17-March-2023
*/


// program to check an Armstrong number of n digits

// take an input
const number = prompt("Enter a positive integer");
const numberOfDigits = number.length;
let sum = 0;

// create a temporary variable
let temp = number;

while (temp > 0) {

    let remainder = temp % 10;

    sum += remainder ** numberOfDigits;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}

if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}
