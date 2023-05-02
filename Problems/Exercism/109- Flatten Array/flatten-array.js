



/**
  #Instructions
  Take a nested list and return a single flattened list with all values except nil/null.

  The challenge is to write a function that accepts an arbitrarily-deep nested list-like structure and returns a flattened structure without any nil/null values.

  For Example

  input: [1,[2,3,null,4],[null],5]

output: [1,2,3,4,5]
  
  02-May-2023
*/


const isNil = value => value == null;
export const flatten = collection => collection
  .reduce((result, el) => [...result, ...(Array.isArray(el) ? flatten(el) : !isNil(el) ? [el] : [])], []);
