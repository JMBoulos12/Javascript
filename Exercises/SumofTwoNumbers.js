


/*
  Create a function that takes two numbers as arguments and returns their sum.

  Examples  :
  addition(3, 2) ➞ 5

  addition(-3, -6) ➞ -9

  addition(7, 3) ➞ 10
  
  20-January-2023
*/

function addition(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Sorry but you didn't pass two numbers.";
  }
  return a + b;
}
