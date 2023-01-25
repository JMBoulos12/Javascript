




/*
  You are given the task to fetch all positive numbers from lists. You discover that the lists are in string format and the numbers are separated by spaces. Someone has already created a function to output positive numbers but they just need a RegEx to make it work.

const list = "23 -43 34 -44 45 -55 56"

function positiveNumbers(list) {
  const REGEXP = /* YOU FILL IN */
  return res.filter( x => REGEXP.test(x))
}
  positiveNumbers(list) // should return ["23", "34", "45", "56"]
  Write the regular expression to make the function work. You are required to use a negative lookbehind assertion in your expression.

  24-January-2023
*/

const REGEXP = /(?<!-)\d+/g
