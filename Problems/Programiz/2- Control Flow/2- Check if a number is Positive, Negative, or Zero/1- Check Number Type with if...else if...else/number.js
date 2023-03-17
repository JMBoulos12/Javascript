



/*
  You will be using the if...else if...else statement to write the program.
  
  Output  :
  Enter a number: 0
  The number is zero.
  
  This program checks if the number entered by the user is positive, negative or zero.
  
  * The condition number > 0 checks if the number is positive.
  * The condition number == 0 checks if the number is zero.
  * The condition number < 0 checks if the number is negative.

  17-March-2023
*/


// program that checks if the number is positive, negative or zero
// input from the user
const number = parseInt(prompt("Enter a number: "));

// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}

// check if number is 0
else if (number == 0) {
  console.log("The number is zero");
}

// if number is less than 0
else {
     console.log("The number is negative");
}
