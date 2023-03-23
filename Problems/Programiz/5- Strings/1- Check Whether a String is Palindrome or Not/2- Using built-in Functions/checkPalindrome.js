



/*
  Output  :
  Enter a string: hello
  It is not a palindrome
  
  In the above program, the palindrome is checked using the built-in methods available in JavaScript.

  * The split('') method converts the string into individual array characters.
    const arrayValues = string.split(''); // ["h", "e", "l", "l", "o"]
  * The reverse() method reverses the position in an array.
    // ["o", "l", "l", "e", "h"]
    const reverseArrayValues = arrayValues.reverse();
  * The join('') method joins all the elements of an array into a string.
    const reverseString = reverseArrayValues.join(''); // "olleh"
  * Then the if...else statement is used to check if the string and the reversed string are equal. If they are equal, the string is a palindrome.
  
  Note: The multiple lines of code can be reduced and written in one line:
        const reverseString = string.split('').reverse().join('');

  22-March-2023
*/


// program to check if the string is palindrome or not

function checkPalindrome(string) {

    // convert string to an array
    const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

//take input
const string = prompt('Enter a string: ');

checkPalindrome(string);
