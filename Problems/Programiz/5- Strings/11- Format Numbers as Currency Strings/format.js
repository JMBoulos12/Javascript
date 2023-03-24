



/*
  Output  :
  $2,500.00
  
  In this program, we have used the Intl.NumberFormat object.

  The Intl.NumberFormat object enables language-sensitive number formatting.

  24-March-2023
*/


// program to format numbers as currency string
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

formatter.format(2500);
