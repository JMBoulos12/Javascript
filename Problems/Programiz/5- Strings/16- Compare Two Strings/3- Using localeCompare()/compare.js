



/*
  In this example, you will learn to write a JavaScript program to compare two strings using various methods.
  
  Output  :
  The strings are similar.
  
  In the above program, the localeCompare() method is used to perform case insensitive string comparison.

  The localeCompare() method returns a number that indicates whether a reference string comes before, or after, or is the same as the given string.

  Here, { sensitivity: 'base' } treats A and a as the same.

  27-March-2023
*/


// program to perform case insensitive string comparison

const string1 = 'JavaScript Program';
const string2 = 'javascript program';

const result = string1.localeCompare(string2, undefined, { sensitivity: 'base' });

if(result == 0) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}
