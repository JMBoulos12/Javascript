




/*
  You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.

  Here are a list of the characters classes in JavaScript:
  ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
  
  There is a hidden message in this string:
  const str = "242Edabit23 45can344 3be3 254324addictive!"
  
  Write the regular expression that reveals the hidden message. 
  You have to remove all of the numbers to reveal the message. 
  Use the character class \D in your expression.

  25-January-2023
*/

const REGEXP = /\D */g
