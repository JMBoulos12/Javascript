



/*
  Output  :
  $2,500.00
  
  The toLocaleString() method returns a string with a language-sensitive representation of that number.

  24-March-2023
*/


// program to format numbers as currency string

const result =  (2500).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
});

console.log(result);
