



/*
  In this example, you will learn to write a JavaScript program that will check if a string contains a substring.
  
  Output  :
  Enter a string: JavaScript is fun
  Enter a string that you want to check: fun
  The string contains fun
  
  The includes() method is used with the if...else statement to check whether a string contains the characters of a specified string.

  Note: The includes() method is case-sensitive. Hence, fun and Fun are different.

  27-March-2023
*/


// program to check if a string contains a substring

// take input
const str = prompt('Enter a string:');
const checkString = prompt('Enter a string that you want to check:');

// check if string contains a substring
if(str.includes(checkString)) {
    console.log(`The string contains ${checkString}`);
} else {
    console.log(`The string does not contain ${checkString}`);
}
