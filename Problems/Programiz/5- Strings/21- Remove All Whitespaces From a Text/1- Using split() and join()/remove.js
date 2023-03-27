



/*
  Output  :
  HelloWorld
  
  In the above program,

  * The split(' ') method is used to split the strings into individual array elements.
    ["", "", "", "", "", "", "Hello", "World", "", "", "", "", "", "", ""]
  * The join('') method merges the array into a string.

  27-March-2023
*/


// program to trim a string

const string = '      Hello World       ';

const result = string.split(' ').join('');

console.log(result);
