




/*
  You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.

  Here are a list of the characters classes in JavaScript:
  ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
  
  Given the below string, write a regex that will find all open compound words starting with the word best and the second word begins with the letter b.
  "best buy best car best friend best-boy bestguest best dressed best bet best man best deal best boyfriend"

  25-January-2023
*/

const REGEXP = /best\sb\w+/g
