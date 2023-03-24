



/*
  Output  :
  $ 1,234.57
  
  In this example, the replace() method is used with the RegEx pattern to replace the number to currency string.

  The toFixed(2) method is used to round up the number to two decimal values.

  24-March-2023
*/


// program to format numbers as currency string

const result = 1234.5678.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

console.warn('$ ' + result);
