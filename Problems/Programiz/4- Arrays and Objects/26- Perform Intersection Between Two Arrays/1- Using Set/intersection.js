



/*
  Output  :
  [1, 3, 5]
  
  In the above program, an intersection is performed between array1 and array2.

  * The array elements are converted into Set elements using the new Set() constructor.
  * The for...of loop is used to iterate over the second Set elements.
  * The has() method is used to check if the element is in the first Set.
  * If the element is present in the first Set, that element is added to the intersectionResult array using the push() method.

  22-March-2023
*/


// program to perform intersection between two arrays using Set
// intersection contains the elements of array1 that are also in array2

function performIntersection(arr1, arr2) {

    // converting into Set
    const setA = new Set(arr1);
    const setB = new Set(arr2);

    let intersectionResult = [];

    for (let i of setB) {
    
        if (setA.has(i)) {
            intersectionResult.push(i);
        }
        
    }
    
    return intersectionResult;

}

const array1 = [1, 2, 3, 5, 9];
const array2 = [1, 3, 5, 8];

const result = performIntersection(array1, array2);
console.log(result);
