


/*
  
  Buggy Code (Part 5)
  
  Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. 
  Look at the examples below to get an idea of what the function should do.

  Examples  :
  printArray(1) ➞ [1]

  printArray(3) ➞ [1, 2, 3]

  printArray(6) ➞ [1, 2, 3, 4, 5, 6]
  
  20-January-2023
*/

function printArray(number){
  var newArray = [];
  
  for(var i = 1; i <= number; i++){
    newArray.push(i);
  } 
  return newArray;
}
