




/*
  You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.

  Here are a list of the characters classes in JavaScript:
  ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh,
  
  You might get text that looks like it's all English characters but it very well may not be:
  pànts !== pants
  
  To ensure that you only get the characters you want in a string you will need to use the character classes that accept hexadecimal digits.

  Create a regex that matches the word "edabit". You cannot use character classes \w, \d, [], or . to solve.

  25-January-2023
*/

const toHex = e => '\\x' + e.charCodeAt().toString(16);
const REGEXP = new RegExp([...'edabit'].map(toHex).join(''));
