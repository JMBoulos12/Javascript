




/*
  Assume a program only reads .js or .jsx files. Write a function that accepts a file path and returns true if it can read the file and false if it can't.

  Examples  :
  isJS("/users/user.jsx") ➞ true

  isJS("/users/user.js") ➞ true

  isJS("/users/user.ts") ➞ false
  
  Notes :
  Use a RegEx boundary assertion in your function.

  24-January-2023
*/

function isJS(path) {
  return /jsx?$/.test(path)
}
