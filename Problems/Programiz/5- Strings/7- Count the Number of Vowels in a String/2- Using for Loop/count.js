



/*
  Output  :
  Enter a string: JavaScript program
  5
  
  In the above example,

  * All the vowels are stored in a vowels array.
  * Initially, the value of the count variable is 0.
  * The for...of loop is used to iterate over all the characters of the string.
  * The toLowerCase() method converts all the characters of a string to lowercase.
  * The includes() method checks if the vowel array contains any of the characters of the string.
  * If any character matches, the value of count is increased by 1.

  24-March-2023
*/


// program to count the number of vowels in a string

// defining vowels
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    // initialize count
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // return number of vowels
    return count
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);
