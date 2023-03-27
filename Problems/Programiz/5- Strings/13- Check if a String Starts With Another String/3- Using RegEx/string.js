



/*
  In this example, you will learn to write a JavaScript program that will check if a string starts with another string.
  
  Output  :
  The string starts with "he".
  
  In the above program, the string is checked using the RegEx pattern and the test() method.

  /^ indicates the starting of the string.

  27-March-2023
*/


// program to check if a string starts with another string

const string = 'hello world';

const pattern = /^he/;

let result = pattern.test(string);

if(result) {
    console.warn('The string starts with "he".');
}
else {
    console.warn(`The string does not starts with "he".`);
}
