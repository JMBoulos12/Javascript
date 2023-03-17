



/*
  Output  :
  Enter a first integer: 60
  Enter a second integer: 72
  HCF is 12
  
  In the above program, a while loop is used with an if...else statement.

  In each iteration, the smaller integer is subtracted from the larger integer. And the result is assigned to a variable holding the larger integer.

  The while loop continues until both the integers become equal.

  17-March-2023
*/


// program to find the HCF or GCD of two integers

// take input
let number1 = prompt('Enter a first positive integer: ');
let number2 = prompt('Enter a second positive integer: ');

// looping until both numbers are equal
while(number1 != number2){
    if(number1 > number2) {
        number1 -= number2;
    }
    else {
        number2 -= number1;
    }
}

// display the hcf
console.log(`HCF is ${number1}`);
