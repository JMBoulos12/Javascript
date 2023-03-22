



/*
  Output  :
  [1, 2, 3]
  []
  
  In the above program, the length property is used to empty the array.

  When setting array.length to 0, all the elements of the array are removed.

  22-March-2023
*/


// program to empty an array

function emptyArray(arr) {

    // setting array length to 0
    arr.length = 0;
    
    return arr;
}

const array = [1, 2 ,3];
console.log(array);

// call the function
const result = emptyArray(array);
console.log(result);
