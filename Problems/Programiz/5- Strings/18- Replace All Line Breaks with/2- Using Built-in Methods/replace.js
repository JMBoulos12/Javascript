



/*
  In this example, you will learn to write JavaScript program that will replace all line breaks in a string with the <br> tag.
  
  Output  :
  I am Learning JavaScript.<br>JavaScript is fun.<br>JavaScript is easy.
  
  In this example, the built-in methods are used to replace all line breaks with <br>.

  The split('\n') splits the string into array elements by splitting on a line break.
  ["I am Learning JavaScript.", "JavaScript is fun.", "JavaScript is easy."]
  
  The join('<br>') method joins the array by adding <br> between array elements.
  I am Learning JavaScript.<br>JavaScript is fun.<br>JavaScript is easy.

  27-March-2023
*/


// program to replace all line breaks in a string with <br>
const string = `I am Learning JavaScript.
JavaScript is fun.
JavaScript is easy.`;

const result = string.split('\n').join('<br>');

console.log(result);
