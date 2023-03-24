



/*
  Output  :
  Enter a string: javaScript
  JavaScript
  
  In the above program, the user is prompted to enter a string and that string is passed into the capitalizeFirstLetter() function.

  * The string's first character is extracted using charAt() method. Here, str.charAt(0); gives j.
  * The toUpperCase() method converts the string to uppercase. Here, str.charAt(0).toUpperCase(); gives J.
  * The slice() method returns the rest of the string.
    Here, str.slice(1); gives avaScript.
  * These two values are concatenated using the + operator.
  
  Note: You can also extract the first character of a string using an array accessing property: str[0].
        str.str[0]; // j
  
  24-March-2023
*/


// program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}

// take input
const string = prompt('Enter a string: ');

const result = capitalizeFirstLetter(string);

console.log(result);
