



/*
  You could also pass a regular expression (regex) inside the replace() method to replace the string.
  
  Output  :
  Mr Red has a blue house and a blue car
  
  In the above program, a regex expression is used as the first parameter inside the replace() method.

  /g refers to global. It means that all the matching characters in the string are replaced.

  Since JavaScript is case-sensitive, R and r are treated as different values.

  You could also use the regex to perform case-insensitive replacement using /gi, where i represents case-insensitive.

  24-March-2023
*/


// program to replace a character of a string

const string = 'Mr Red has a red house and a red car';

// regex expression
const regex = /red/g;

// replace the characters
const newText = string.replace(regex, 'blue');

// display the result
console.log(newText);
