



/*
  In this example, you will learn to write a JavaScript program that will encode a string to Base64.
  
  Output  :
  TGVhcm5pbmcgSmF2YVNjcmlwdA==
  Learning JavaScript
  
  In the above example, the btoa() method is used to convert the string to Base64.

  The atob() method is used to convert the Base64 to a string.

  27-March-2023
*/


// program to encode a string to Base64
// defining the string
const str = "Learning JavaScript"; 

// encoding the string
const result = window.btoa(str);
console.log(result);

// decoding the string
const result1 = window.atob(result);
console.log(result1);
