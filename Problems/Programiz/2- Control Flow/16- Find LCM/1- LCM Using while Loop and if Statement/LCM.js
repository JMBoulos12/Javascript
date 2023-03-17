



/*
  The Least Common Multiple (LCM) of two integers is the smallest positive integer that is perfectly divisible by both integers.

  For example, the LCM of 6 and 8 is 24.

  Output  :
  Enter a first positive integer: 6
  Enter a second positive integer: 8
  The LCM of 6 and 8 is 24
  
  In the above program, the user is prompted to enter two positive integers.

  The greater number among the numbers provided by the user is stored in a min variable. 
  The LCM of two numbers cannot be less than the greater number.

  The while loop is used with an if statement. In each iteration,

  * The variable min is divided by both the num1 and num2.
  * If both numbers' remainders are equal to 0, then it is the LCM and the break statement terminates the program.
  * If both numbers' remainders are not equal to 0, the value of min is increased by 1 and the loop continues.
  * The while loop continues until the condition is met.
    if (min % num1 == 0 && min % num2 == 0)

  17-March-2023
*/


// program to find the LCM of two integers

// take input
const num1 = prompt('Enter a first positive integer: ');
const num2 = prompt('Enter a second positive integer: ');

// higher number among number1 and number2 is stored in min
let min = (num1 > num2) ? num1 : num2;

// while loop
while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}
