



/*
  Output  :
  The arrays have the same elements.
  
  In the above program,

  The length of the array elements are compared using the length property. If both arrays have different lengths, false is returned.

  Else,

  * The for loop is used to iterate through all the elements of the first array.
  * During each iteration, elements of the first array are compared to corresponding elements of the second array.
    arr1[i] != arr2[i]
  * If the corresponding array elements of both arrays are not equal, false is returned and the loop terminates.
  * If all elements are equal, true is returned.
  
  Note: The above program does not work if the array element contains objects.

        For example :
        array1 = [1, {a : 2}, 3, 5];

  22-March-2023
*/


// program to extract value as an array from an array of objects

function compareArrays(arr1, arr2) {

    // check the length
    if(arr1.length != arr2.length) {
        return false;
    } 
    else { 
        let result = false;
        
        // comparing each element of array 
        for(let i=0; i<arr1.length; i++) {

            if(arr1[i] != arr2[i]) {
                return false;
            }
            else {
                result = true;
            }

        }
        return result;
        
  }

}

const array1 = [1, 3, 5, 8];
const array2 = [1, 3, 5, 8];

const result = compareArrays(array1, array2);

// if result is true
if(result) {
    console.log('The arrays have the same elements.');
}
else {
    console.log('The arrays have different elements.');
}
