




/*
  You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character. 
  The . is the only exception. It requires no \ and it is a wildcard character. It matches any character except for line terminators.

  ES2018 added the s "dotAll" flag, which allows the dot to also match line terminators.

  Here are a list of the characters classes in JavaScript:

  ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
  
  const str = "eta, edu, etc, ele, epa, eye, exe, emf, ete, eon, era"

  // Instead of a string we want an array like this:
  // ["eta", "edu", "etc", "ele", "epa", "eye", "exe", "emf", "ete", "eon", "era"]
  // You could use the split() method but let's try with a regular expression.
  
  Write the regular expression that returns an array of all words. Use the character class . in your expression. 
  
  25-January-2023
*/

const REGEXP = /e../g
