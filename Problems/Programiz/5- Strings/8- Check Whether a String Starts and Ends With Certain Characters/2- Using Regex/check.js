



/*
  Output  :
  Enter a string: String
  The string starts with S and ends with G
  Enter a string: string
  The string starts with S and ends with G
  Enter a string: JavaScript
  The string does not start with S and does not end with G
  
  In the above program, a regular expression (RegEx) is used with the test() method to check if the string starts with S and ends with G.

  * The /^S/i pattern checks if the string is S or s. Here, i denotes that the string is case-insensitive. Hence, S and s are considered the same.
  * The /G$/i patterns checks if the string is G or g.
  * The if...else...if statement is used to check the conditions and display the outcome accordingly.
  * The for loop is used to take different inputs from the user to show different cases.

  24-March-2023
*/


// program to check if a string starts with 'S' and ends with 'G'

function checkString(str) {

    // check if the string starts with S and ends with G
    if( /^S/i.test(str) && /G$/i.test(str)) {
        console.log('The string starts with S and ends with G');
    }
    else if(/^S/i.test(str)) {
        console.log('The string starts with S but does not ends with G');
    }
     else if(/G$/i.test(str)) {
        console.log('The string starts does not with S but ends with G');
    }
    else {
        console.log('The string does not start with S and does not end with G');
    }
}

// for loop to show different scenario
for (let i = 0; i < 3; i++) {

    // take input
    const string = prompt('Enter a string: ');

    checkString(string);
}
