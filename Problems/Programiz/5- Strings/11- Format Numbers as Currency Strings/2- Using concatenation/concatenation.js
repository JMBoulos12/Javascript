



/*
  Output  :
  $ 1234.57
  
  In this example, the toFixed(2) method is used to round up the number to two decimal values.

  '$' is added to the number to convert it into a currency string.

  24-March-2023
*/


// program to format numbers as currency string

const number = 1234.5678;

const result = '$ ' + number.toFixed(2);

console.log(result);
