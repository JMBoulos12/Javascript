



/*
  Output  :
  Enter a string: javaScript
  JavaScript
  
  In the above program, the regular expression (regex) is used to convert the first letter of a string to uppercase.

  * The regex pattern is /^./ matches the first character of a string.
  * The toUpperCase() method converts the string to uppercase.

  24-March-2023
*/


// program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.replace(/^./, str[0].toUpperCase());

    return capitalized;
}

// take input
const string = prompt('Enter a string: ');

const result = capitalizeFirstLetter(string);

console.log(result);
