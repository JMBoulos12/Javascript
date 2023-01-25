




/*
  You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.

  Here are a list of the characters classes in JavaScript:
  ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
  
  HTML elements are everything from the start tag to the end tag. An example of one div element would be: <div>edabit</div>.

  Find out how many <div> elements are used in a string. Use the character class \W in your expression.

  Example :
  const str = "<div>Hello.</div><div>My name is <b>George</b>.</div>"
  // 2 times

  const str = "<div><h1>The Word for Today</h1><div>aardvark</div></div>"
  // 2 times

  const str = "<div></div>"
  // 1 time

  25-January-2023
*/

const REGEXP = /<div\W/g;
