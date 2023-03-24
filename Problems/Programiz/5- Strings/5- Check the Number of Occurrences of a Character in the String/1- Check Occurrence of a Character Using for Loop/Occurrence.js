



/*
  Output  :
  Enter a string: school
  Enter a  letter to check: o
  2
  
  In the above example, the user is prompted to enter a string and the character to check.

  * In the beginning, the value of the count variable is 0.
  * The for loop is used to iterate over the strings.
  * The charAt() method returns a character at a specified index.
  * During each iteration, if the character at that index matches the required character to match, then the count variable is increased by 1.

  24-March-2023
*/


// program to check the number of occurrence of a character

function countString(str, letter) {
    let count = 0;

    // looping through the items
    for (let i = 0; i < str.length; i++) {

        // check if the character is at that position
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}

// take input from the user
const string = prompt('Enter a string: ');
const letterToCheck = prompt('Enter a letter to check: ');

//passing parameters and calling the function
const result = countString(string, letterToCheck);

// displaying the result
console.log(result);
