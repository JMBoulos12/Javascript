



/*
  Output  :
  [1, 2, 3]
  
  In the above program, Set is used to remove duplicate items from an array.

  A Set is a collection of unique values.

  Here,

  * The array is converted to Set and all the duplicate elements are automatically removed.
  * The spread syntax ... is used to include all the elements of the Set to a new array.

  22-March-2023
*/


// program to remove duplicate value from an array

function getUnique(arr){

    // removing duplicate
    let uniqueArr = [...new Set(arr)];

    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];

// calling the function
getUnique(array);
