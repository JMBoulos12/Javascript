




/*
  Write a regular expression that ensures the word "end" is inside of another word (e.g. "bending"). Non-word characters such as !, ?, etc. cannot be boundaries.

  Examples  :
  "The end of the story." ➞ false
  "Endings are pointless." ➞ false
  "Let's send!" ➞ false
  "We viewed the rendering at the end." ➞ false
  "Sometimes bending the rules is good." ➞ true
  
  Notes :
  You cannot use \w, *, . or + in your expressions.
  You don't need to write a function, just the pattern.
  The expression should be case-insensitive and should check all occurences of "end".

  24-January-2023
*/

const REGEXP = /\Bend\B/gi
