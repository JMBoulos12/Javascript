



/*
  
  Output  :
  Enter a string: hello world
  dlrow olleh

  In the above program, the user is prompted to enter a string. That string is passed to the reverseString() function.

  Inside the reverseString() function,

  An empty newString variable is created.
  The for loop is used to iterate over the strings. During the first iteration, str.length - 1 gives the position of the last element. That element is added to the newString variable.
  This process continues for all the string elements.
  The value of i decreases in each iteration and continues until it becomes 0.

  24-March-2023
*/

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// take input from the user
const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);
