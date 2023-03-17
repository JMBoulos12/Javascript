



/*
  Output  :
  Enter the first number 5
  Enter the second number 3
  The sum of 5 and 3 is: 8
  
  The above program asks the user to enter two numbers. Here, prompt() is used to take inputs from the user. 
  parseInt() is used to convert the user input string to number.
  const num1 = parseInt(prompt('Enter the first number '));
  const num2 = parseInt(prompt('Enter the second number '));
  
  Then, the sum of the numbers is computed.
  const sum = num1 + num2;
  
  Finally, the sum is displayed. To display the result, we have used the template literal ` `. This allows us to include variables inside strings.
  console.log(`The sum of ${num1} and ${num2} is ${sum}`);
  
  To include variables inside ``, you need to use the ${variable} format.
  
  Note: Template literals was introduced in ES6 and some browsers may not support them.

  17-March-2023
*/


// store input numbers
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));

//add two numbers
const sum = num1 + num2;

// display the sum
console.log(`The sum of ${num1} and ${num2} is ${sum}`);
