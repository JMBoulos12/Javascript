



/*
  In this example, you will learn to write a JavaScript program that removes duplicate values from an array.
  
  Output  :
  [1, 2, 3]
  
  In the above program, the duplicate elements are removed from array.

  Here,

  * The for...of loop is used to loop through all the elements of an arr array.
  * The indexOf() method returns -1 if the element is not in the array. Hence, during each iteration, 
    if the element equals -1, the element is added to uniqueArr using push().

  22-March-2023
*/


// program to remove duplicate value from an array

function getUnique(arr){
    
    let uniqueArr = [];
    
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];

// calling the function
// passing array argument
getUnique(array);
