



/*
  
  In this example, you will learn to write a JavaScript program that will compare the elements of two arrays.
  
  Output  :
  The arrays have the same elements.
  
  The JSON.stringify() method converts an array into JSON string.
  JSON.stringify([1, 3, 5, 8]); // "[1,3,5,8]"
  
  Then, the two array strings are compared using ==.

  22-March-2023
*/


// program to compare two arrays

function compareArrays(arr1, arr2) {

    // compare arrays
    const result = JSON.stringify(arr1) == JSON.stringify(arr2)

    // if result is true
    if(result) {
        console.log('The arrays have the same elements.');
    }
    else {
        console.log('The arrays have different elements.');
    }

}

const array1 = [1, 3, 5, 8];
const array2 = [1, 3, 5, 8];

compareArrays(array1, array2);
