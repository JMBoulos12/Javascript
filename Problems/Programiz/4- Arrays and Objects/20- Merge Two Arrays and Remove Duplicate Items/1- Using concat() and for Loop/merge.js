



/*
  In this example, you will learn to write a JavaScript program that will merge two arrays and remove duplicate items from an array.
  
  Output  :
  [1, 2, 3, 5]
  
  In the above program, the two array elements are merged together and the duplicate elements are removed.

  Here,

  * The two arrays are merged using the concat() method.
  * The for...of loop is used to loop through all the elements of arr.
  * The indexOf() method returns -1 if the element is not in the array.
  
  Hence, during each iteration, if the element equals -1, the element is added to the uniqueArr array using the push() method.

  22-March-2023
*/


// program to merge and remove duplicate value from an array

function getUniqueAfterMerge(arr1, arr2){

    // merge two arrays
    let arr = arr1.concat(arr2);
    let uniqueArr = [];

    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 5]

// calling the function
// passing array argument
getUniqueAfterMerge(array1, array2);
