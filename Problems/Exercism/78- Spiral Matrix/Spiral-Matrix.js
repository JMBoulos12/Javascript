



/**
  #Instructions
  Given the size, return a square matrix of numbers in spiral order.

  The matrix should be filled with natural numbers, starting from 1 in the top-left corner, increasing in an inward, clockwise spiral order, like these examples:

  #Examples
  #Spiral matrix of size 3
  1 2 3
  8 9 4
  7 6 5
  
  #Spiral matrix of size 4
   1  2  3 4
  12 13 14 5
  11 16 15 6
  10  9  8 7
  
  27-April-2023
*/


export const spiralMatrix = (n) => {
  const result = [];
  let next = 0;
  // Add a layer at a time
  for (let i = 0; i < n; ++i) {
    // Add the new column
    result.map(row => (row.unshift(next++), row));
    // Add the new row
    result.push([...Array(i+1)].map(_ => next++));
    // Flip the columns aroud
    result.reverse();
    // Flip the rows around
    result.map(row => (row.reverse()));
  }
  // Reverse all numbers so 1 starts at the top left instead of 0 at the center
  return result.map(row => row.map(k => n*n - k));
};
