



/*
  We know that 1 kilometer is equal to 0.621371 miles.

  So to convert kilometers to miles, you can use the formula:
  miles = kilometers * 0.621371
  
  Output  :
  Enter value in kilometers: 2.2
  2.2 kilometers is equal to 1.3670162000000001 miles.
  
  Here, the kilometers variable is used to store the kilometer value from the user. 
  Then kilometer value is multiplied with factor to convert into miles.

  To convert miles to kilometers, you can use formula:
  kilometers = miles / factor

  17-March-2023
*/


// taking kilometers input from the user
const kilometers = prompt("Enter value in kilometers: ")

// conversion factor
const factor = 0.621371

// calculate miles
const miles = kilometers * factor

console.log(`${kilometers} kilometers is equal to ${miles} miles.`);
