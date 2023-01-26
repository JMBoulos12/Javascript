




/*
  Create a regular expression that checks for a password:

  It should contain at least one uppercase letter.
  It should contain at least one lowercase letter.
  It should contain at least one digit.
  It should contain at least one special symbol.
  REGEXP.test("bbA234c@cy~!")  ➞ true

  REGEXP.test("32Bl4###xxz") ➞ true

  REGEXP.test("!abcABC9lzD") ➞ true

  REGEXP.test("d@!2?%^&ahaZbb") ➞ true 
  
  26-January-2023
*/

const REGEXP = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W)/
