



/*
  You can find the largest among three numbers using the if...else statement.
  
  Output  :
  Enter first number: -7
  Enter second number: -5
  Enter third number: -1
  The largest number is -1
  
  In the above program, parseFloat() is used to convert numeric string to number. 
  If the string is a floating number, parseFloat() converts the string into floating point number.

  The numbers are compared with one another using greater than or equal to >= operator. 
  And the if...else if...else statement is used to check the condition.

  Here, logical AND && is also used to check two conditions.

  24-March-2023
*/


// program to find the largest among three numbers

// take input from the user
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));
let largest;

// check the condition
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

// display the result
console.log("The largest number is " + largest);
