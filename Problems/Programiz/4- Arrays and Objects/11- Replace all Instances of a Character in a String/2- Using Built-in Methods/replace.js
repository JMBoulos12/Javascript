



/*
  Output  :
  LeArning JAvAScript ProgrAm
  
  In this example, the built-in methods are used to replace all the occurrences of a character in a string.

  The split('a') method splits the string into an array.
  ["Le", "rning J", "v", "Script Progr", "m"]
  
  The join('A') method joins all the array elements into a string by adding A between each array element.
  LeArning JAvAScript ProgrAm

  21-March-2023
*/


// program to replace all instances of character in a string

const string = 'Learning JavaScript Program';

const splitString = string.split('a');

const result = splitString.join('A');

console.log(result);
