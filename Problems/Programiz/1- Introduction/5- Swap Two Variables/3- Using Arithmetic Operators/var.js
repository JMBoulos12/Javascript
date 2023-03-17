



/*
  Output  :
  Enter the first variable: 4
  Enter the second variable: 2
  The value of a after swapping: 2
  The value of b after swapping: 4
  This method only uses the two variables and swaps the value of the variables using arithmetic operators + and -.

  Here, parseInt() is used because prompt() takes input from the user as a string. 
  And when numeric strings are added, it behaves as a string. For example, '2' + '3' = '23'. So parseInt() converts a numeric string to number.
  
  Let's see how the above program swaps values. Initially, a is 4 and b is 2.

  * a = a + b assigns the value 4 + 2 to a (now 6).
  * b = a - b assigns the value 6 - 2 to b (now 4).
  * a = a - b assign the value 6 - 4 to a (now 2).
  
  Finally, a is 2 and b is 4.

  Note: You can use arithmetic operators (+, -) if both variables are of number type.

  17-March-2023
*/


//JavaScript program to swap two variables

//take input from the users
let a = parseInt(prompt('Enter the first variable: '));
let b = parseInt(prompt('Enter the second variable: '));

// addition and subtraction operator
a = a + b;
b = a - b;
a = a - b;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);
