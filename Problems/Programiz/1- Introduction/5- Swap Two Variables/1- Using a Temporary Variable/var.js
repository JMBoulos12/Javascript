



/*
  Output  :
  Enter the first variable: 4
  Enter the second variable: 2
  The value of a after swapping: 2
  The value of b after swapping: 4
  
  Here,
  1-  We created a temp variable to store the value of a temporarily.
  2-  We assigned the value of b to a.
  3-  The value of temp is assigned to b
  
  As a result, the value of the variables are swapped.

  Note: You can also swap strings or other data types using this method.

  17-March-2023
*/


//JavaScript program to swap two variables

//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);
