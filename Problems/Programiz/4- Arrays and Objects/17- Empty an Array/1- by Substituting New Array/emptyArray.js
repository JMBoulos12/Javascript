



/*
  In this example, you will learn to write a JavaScript program that will empty an array.
  
  Output  :
  [1, 2, 3]
  []
  
  In this program, the value of array is substituted by a new empty array.

  22-March-2023
*/


// program to empty an array

function emptyArray(arr) {

    // substituting new array
    arr = [];
    
    return arr;
}

const array = [1, 2 ,3];
console.log(array);

// call the function
const result = emptyArray(array);
console.log(result);
