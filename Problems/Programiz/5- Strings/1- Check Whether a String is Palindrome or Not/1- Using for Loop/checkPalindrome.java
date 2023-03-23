



/*
  Output  :
  Enter a string: madam
  It is a palindrome
  
  In the above program, the checkPalindrome() function takes input from the user.

  * The length of the string is calculated using the length property.
  * The for loop is used to iterate up to the half of the string. 
    The if condition is used to check if the first and the corresponding last characters are the same. 
    This loop continues till the half of the string.
  * During the iteration, if any character of the string, when compared with its corresponding last string is not equal, the string is not considered a palindrome.

  22-March-2023
*/


// program to check if the string is palindrome or not

function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(string);

console.log(value);
