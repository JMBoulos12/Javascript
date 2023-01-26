




/*
  Write a RegExp that looks for all decimal numbers including integer ones, with the floating point and negative ones.

  Example
  const REGEXP = /your regexp/g

  let str = "-1.5 0 2 -123.4."

  str.match(REGEXP)  ➞ -1.5, 0, 2, -123.4 
  
  26-January-2023
*/

const REGEXP = /-?\d+(\.\d+)?/g
