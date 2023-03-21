



/*
  In this example, you will learn to write a JavaScript program that will replace all instances of a character in a string.
  
  Output  :
  
  LeArning JAvAScript ProgrAm
  In the above example, the RegEx is used with the replace() method to replace all the instances of a character in a string.

  /g represents that the operation is carried out for all in instances of the string.

  21-March-2023
*/


// program to replace all instances of a character in a string

const string = 'Learning JavaScript Program';

const result = string.replace(/a/g, "A");

console.log(result);
