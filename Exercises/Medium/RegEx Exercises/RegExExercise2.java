




/*
  Create a regular expression to find all (opening and closing) HTML tags with their attributes. Assume that tag attributes may not contain < and > (inside quotes too).

  Example :
  const REGEXP = /your regexp/g

  let str = '<> <a href="/"> <input type="radio" checked> <b>'

  str.match(REGEXP) ➞  '<a href="/">', '<input type="radio" checked>', '<b>'

  24-January-2023
*/

const REGEXP = /<[^<>]+?>/g
