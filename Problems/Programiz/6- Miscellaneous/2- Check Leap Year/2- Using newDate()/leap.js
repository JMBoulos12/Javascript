



/*
  In this example, you will learn to write a JavaScript program that will check if a year is leap year or not.
  
  Output  :
  Enter a year: 2000
  2000 is a leap year
  
  In this program, the month of February is checked if it contains 29 days.

  If a month of February contains 29 days, it will be a leap year.

  The new Date(2000, 1, 29) gives the date and time according to the specified arguments.
  Tue Feb 29 2000 00:00:00 GMT+0545 (+0545)
  
  The getDate() method returns the day of the month.

  27-March-2023
*/


// program to check leap year
function checkLeapYear(year) {

    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = prompt('Enter a year:');

checkLeapYear(year);
