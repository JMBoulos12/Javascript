



/*
  Output  :
  Enter a string: String
  The string starts with S but does not end with G
  
  In the above program, the two methods startsWith() and endsWith() are used.

  The startsWith() method checks if the string starts with the particular string.
  * The endsWith() method checks if the string ends with the particular string.
  * The above program does not check for lowercase letters. Hence, here G and g are different.

  You could also check if the above character starts with S or s and ends with G or g.
  str.startsWith('S') || str.startsWith('s') && str.endsWith('G') || str.endsWith('g');

  24-March-2023
*/


// program to check if a string starts with 'S' and ends with 'G'

function checkString(str) {

    // check if the string starts with S and ends with G
    if(str.startsWith('S') && str.endsWith('G')) {
        console.log('The string starts with S and ends with G');
    }
    else if(str.startsWith('S')) {
        console.log('The string starts with S but does not end with G');
    }
     else if(str.endsWith('G')) {
        console.log('The string starts does not with S but end with G');
    }
    else {
        console.log('The string does not start with S and does not end with G');
    }
}


// take input
let string = prompt('Enter a string: ');
checkString(string);
