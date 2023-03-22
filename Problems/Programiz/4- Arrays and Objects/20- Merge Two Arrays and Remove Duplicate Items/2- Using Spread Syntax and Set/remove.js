



/*
  Output  :
  [1, 2, 3, 5]
  
  In the above program, two arrays are merged together and Set is used to remove duplicate items from an array.

  The Set is a collection of unique values.

  Here,

  * Two array elements are merged together using the spread syntax ...
  * The array is converted to Set and all the duplicate elements are automatically removed.
  * The spread syntax ... is then used to include all the elements of the set back to an array.

  22-March-2023
*/


// program to merge and remove duplicate value from an array

function getUniqueAfterMerge(arr1, arr2){

    // merge two arrays
    let arr = [...arr1, ...arr2];

    // removing duplicate
    let uniqueArr = [...new Set(arr)];

    console.log(uniqueArr);
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 5]

// calling the function
getUniqueAfterMerge(array1, array2);
