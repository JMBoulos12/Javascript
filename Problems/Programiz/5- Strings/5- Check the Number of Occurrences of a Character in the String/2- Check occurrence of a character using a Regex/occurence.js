



/*
  Output  :
  Enter a string: school
  Enter a  letter to check: o
  2
  
  In the above example, a regular expression (regex) is used to find the occurrence of a string.

  * const re = new RegExp(letter, 'g'); creates a regular expression.
  * The match() method returns an array containing all the matches. Here, str.match(re);gives ["o", "o"].
  * The length property gives the length of an array element.

  24-March-2023
*/


// program to check the occurrence of a character

function countString(str, letter) {

    // creating regex 
    const re = new RegExp(letter, 'g');

    // matching the pattern
    const count = str.match(re).length;

    return count;
}

// take input from the user
const string = prompt('Enter a string: ');
const letterToCheck = prompt('Enter a letter to check: ');

//passing parameters and calling the function
const result = countString(string, letterToCheck);

// displaying the result
console.log(result);
