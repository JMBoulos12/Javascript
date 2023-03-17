



/*
  Output  :
  Enter a first positive integer: 6
  Enter a second positive integer: 8
  The LCM of 6 and 8 is 24.
  
  In this program, firstly HCF of the numbers is calculated. Then LCM is calculated using the given formula.

  17-March-2023
*/


// program to find the LCM of two integers

let hcf;
// take input
const number1 = prompt('Enter a first positive integer: ');
const number2 = prompt('Enter a second positive integer: ');

// looping from 1 to number1 and number2 to find HCF
for (let i = 1; i <= number1 && i <= number2; i++) {

    // check if is factor of both integers
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}

// find LCM
let lcm = (number1 * number2) / hcf;

// display the hcf
console.log(`HCF of ${number1} and ${number2} is ${lcm}.`);
