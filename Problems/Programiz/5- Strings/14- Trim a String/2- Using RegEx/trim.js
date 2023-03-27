



/*
  In this example, you will learn to write a JavaScript program that will trim a string.
  
  Output  :
  Hello World
  
  In this program, the RegEx is used with the replace() method to trim the string.

  /^\s+|\s+$/g checks for whitespace at the beginning and end of the string.

  27-March-2023
*/


// program to trim a string

function trimString(x) {
    let trimValue = x.replace(/^\s+|\s+$/g,'');
    return trimValue;
}

const result = trimString('    Hello world    ');
console.log(result);
