



/*
  In this example, you will learn to write JavaScript program that will replace all line breaks in a string with the <br> tag.
  
  Output  :
  I am Learning JavaScript.<br>JavaScript is fun.<br>JavaScript is easy.
  
  In this example:

  * The RegEx is used with the replace() method to replace all the line breaks in string with <br>.
  * The pattern /(\r\n|\r|\n)/ checks for line breaks.
  * The pattern /g checks across all the string occurrences.

  27-March-2023
*/


// program to replace all line breaks in a string with <br>
const string = `I am Learning JavaScript.
JavaScript is fun.
JavaScript is easy.`;

const result = string.replace(/(\r\n|\r|\n)/g, '<br>');

console.log(result);
