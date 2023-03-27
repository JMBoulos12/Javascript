



/*
  In this example, you will learn to write a JavaScript program that will remove all whitespaces from a text.
  
  Output  :
  HelloWorld
  
  In this program, the Regular Expression is used with the replace() method to remove all whitespaces from a text.

  /\s/g checks for whitespace in the string.

  27-March-2023
*/


// program to trim a string

function trimString(x) {

    const result = x.replace(/\s/g,'');
    return result

}

const result = trimString('    Hello World    ');
console.log(result);
