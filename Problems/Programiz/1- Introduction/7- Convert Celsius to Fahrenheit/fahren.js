



/*
  You can convert the celsius value to fahrenheit by using the formula:
  fahrenheit = celsius * 1.8 + 32
  
  Output  :
  Enter a celsius value: 55
  55 degree celsius is equal to 131 degree fahrenheit.
  
  In the above program, the user enters the celsius value and is stored in the celsius variable. 
  Then the fahrenheit formula is used to convert celsius value to fahrenheit.

  You can convert fahrenheit value to celsius using the formula:

  celsius = (fahrenheit - 32) / 1.8

  17-March-2023
*/


// program to convert celsius to fahrenheit
// ask the celsius value to the user 
const celsius = prompt("Enter a celsius value: ");

// calculate fahrenheit
const fahrenheit = (celsius * 1.8) + 32

// display the result
console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);
