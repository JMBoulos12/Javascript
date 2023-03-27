



/*
  In this example, you will learn to write a JavaScript program that will generate strings of any size by picking characters randomly from A-Z, a-z, and 0-9.
  
  Output  :
  B5cgH
  
  In the above example, the Math.random() method is used to generate random characters from the specified characters (A-Z, a-z, 0-9).

  The for loop is used to loop through the number passed into the generateString() function. During each iteration, a random character is generated.

  27-March-2023
*/


// program to generate random strings

// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateString(5));
