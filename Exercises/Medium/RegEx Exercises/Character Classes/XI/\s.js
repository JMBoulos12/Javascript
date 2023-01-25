




/*
  You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.

  Here are a list of the characters classes in JavaScript:
  ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
  
  You probably know already know the string method trim(). It will remove all of the leading and trailing whitespaces in a string.

  Create a regular expression that will function like the trim() method. Your regex will work together with this function: string.replace(REGEXP, ""). You must use the \s character class in your expression.

  Example :
  const str = "    Hello World    "
  // "Hello World"

  const str = "    We need more space   "
  // "We need more space"

  25-January-2023
*/

const REGEXP = /^\s+|\s+$/g
