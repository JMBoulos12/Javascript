



/*
  In this example, you will learn to write a JavaScript program to compare two strings using various methods.
  
  Output  :
  The strings are similar.
  
  In the above program, two strings are compared. Here,

  * The toUpperCase() method converts all the string characters to uppercase.
  * === is used to check if both the strings are the same.
  * The if...else statement is used to display the result as per the condition.
  
  Note: You can also use the toLowerCase() method to convert all the strings to lowercase and perform the comparison.

  27-March-2023
*/


// js program to perform string comparison

const string1 = 'JavaScript Program';
const string2 = 'javascript program';

// compare both strings
const result = string1.toUpperCase() === string2.toUpperCase();

if(result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}
