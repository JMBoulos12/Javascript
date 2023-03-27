



/*
  In this example, you will learn to write a JavaScript program that will check if a string starts with another string.
  
  Output  :
  The string starts with "he".
  
  In the above program, the lastIndexOf() method is used to check if a string starts with another string.

  The lastIndexOf() method returns the index of the searched string (here searching from the first index).

  27-March-2023
*/


// program to check if a string starts with another string

const string = 'hello world';

const toCheckString = 'he';

let result = string.lastIndexOf(toCheckString, 0) === 0;
if(result) {
    console.warn('The string starts with "he".');
}
else {
    console.warn(`The string does not starts with "he".`);
}
