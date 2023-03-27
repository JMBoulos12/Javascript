



/*
  In this example, you will learn to write a JavaScript program to compare two strings using various methods.
  
  Output  :
  The strings are similar.
  
  In the above program, the RegEx is used with the test() method to perform case insensitive string comparison.

  In the RegEx pattern,  "g" syntax denotes global and "gi" syntax denotes case insensitive comparisons.

  27-March-2023
*/


// program to perform string comparison

const string1 = 'JavaScript Program';
const string2 = 'javascript program';

// create regex
const pattern = new RegExp(string1, "gi");

// compare the stings
const result = pattern.test(string2)

if(result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}
