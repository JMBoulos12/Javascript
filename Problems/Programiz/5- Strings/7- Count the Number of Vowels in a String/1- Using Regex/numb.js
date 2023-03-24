



/*
  Output  :
  Enter a string: JavaScript program
  5
  
  In this program, the user is prompted to enter a string and that string is passed to the countVowel() function.

  * The regular expression (RegEx) pattern is used with the match() method to find the number of vowels in a string.
  * The pattern /[aeiou]/gi checks for all the vowels (case-insensitive) in a string. Here,
    str.match(/[aeiou]/gi); gives ["a", "a", "i", "o", "a"]
  * The length property gives the number of vowels present.

  24-March-2023
*/


// program to count the number of vowels in a string

function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);
