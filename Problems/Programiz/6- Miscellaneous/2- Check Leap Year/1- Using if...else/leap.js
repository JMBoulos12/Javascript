



/*
  In this example, you will learn to write a JavaScript program that will check if a year is leap year or not.
  
  A year is a leap year if the following conditions are satisfied:
  1-  The year is a multiple of 400.
  2-  The year is a multiple of 4 and not a multiple of 100.
  
  Output  :
  Enter a year: 2000
  2000 is a leap year
  
  In the above program, the three conditions are checked to determine if the year is a leap year or not.

  The % operator returns the remainder of the division.

  27-March-2023
*/


// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = prompt('Enter a year:');

checkLeapYear(year);
