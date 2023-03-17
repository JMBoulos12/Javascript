



/*
  Output  :
  Enter operator ( either +, -, * or / ): *
  Enter first number: 3.4
  Enter second number: 5.6
  3.4 * 5.6 = 19.04
  
  In the above example, the user is prompted to enter an operator (either +, -, * or /) and two numbers.

  The parseFloat() converts the numeric string value to a floating-point value.

  The if...else if...if statement is used to check the condition that the user has entered for the operator. 
  The corresponding operation is performed and the output is displayed.

  17-March-2023
*/


// program for a simple calculator

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);
