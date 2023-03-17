



/*
  This program can also be written using the nested if...else statement.
  
  Output  :
  Enter a number: 0
  You entered number zero
  
  However, the program works the same as Example 1. However, the second example uses the nested if...else statement.

  17-March-2023
*/


// check if the number is positive, negative or zero
const number = prompt("Enter a number: ");

if (number >= 0) {
    if (number == 0) {
        console.log("The number is zero");
    } else {
        console.log("The number is positive");
    }
} else {
    console.log("The number is negative");
}
