



/*
  Output  :
  Mr blue has a blue house and a blue car
  
  In the above program, a regex expression is used as the first parameter inside the replace() method.

  /g refers to global (that replacement is done across the whole string) and /i refers to case-insensitive.

  The replace() method takes the string that you want to replace as the first parameter and the string you want to replace with as the second parameter.

  24-March-2023
*/


// program to replace all occurrence of a string

const string = 'Mr Red has a red house and a red car';

// regex expression
const regex = /red/gi;

// replace the characters
const newText = string.replace(regex, 'blue');

// display the result
console.log(newText);
