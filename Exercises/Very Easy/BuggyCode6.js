


/*
  Mubashir wants to remove numbers from a given string!
  Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.
  Examples  :
  removeNumbers("mubashir1") ➞ "mubashir"
  removeNumbers("12ma23tt") ➞ "matt"
  removeNumbers("e1d2a3b4i5t6") ➞ "edabit"
  
  20-January-2023
*/

function removeNumbers(str){
  return str.replace(/[0-9]/g, '');
}
