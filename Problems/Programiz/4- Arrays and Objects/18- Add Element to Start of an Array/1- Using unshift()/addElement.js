



/*
  In this example, you will learn to write a JavaScript program that adds a new element at the beginning of an array.
  
  Output  :
  [4, 1, 2, 3]
  
  In this program, the new element is added to the array variable using the unshift() method.

  The unshift() method adds a new element at the beginning of an array.

  22-March-2023
*/


// program to add element to an array

function addElement(arr) {

    // adding new array element
    arr.unshift(4);
    
    console.log(arr);
}

const array = [1, 2, 3];

// calling the function
// passing array argument
addElement(array);
