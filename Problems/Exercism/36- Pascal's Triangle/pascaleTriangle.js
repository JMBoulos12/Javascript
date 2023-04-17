



/**
  #Instructions:
  Compute Pascal's triangle up to a given number of rows.

  In Pascal's Triangle each number is computed by adding the numbers to the right and left of the current position in the previous row.

      1
     1 1
    1 2 1
   1 3 3 1
  1 4 6 4 1
  # ... etc 
  
  17-April-2023
*/


const buildNextRow = (lastRow = []) => Array.from(
  Array(lastRow.length + 1),
  (_, i) => lastRow[i - 1] + lastRow[i] || 1
);
export const rows = (numberOfRows = 0, triangle = []) => numberOfRows
  ? rows(numberOfRows - 1, [...triangle, buildNextRow(triangle[triangle.length - 1])])
  : triangle;
