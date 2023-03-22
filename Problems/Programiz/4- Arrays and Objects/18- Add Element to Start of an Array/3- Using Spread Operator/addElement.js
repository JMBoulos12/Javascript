



/*
  Output  :
  [4, 1, 2, 3]
  
  In the above program, the spread operator ... is used to add a new element to the beginning of an array.

  arr = [4, ...arr]; takes first element as 4 and the rest elements are taken from array.

  22-March-2023
*/


// program to add element to an array

function addElement(arr) {

    // adding element to array
    arr = [4, ...arr];
    
    console.log(arr);
}

const array = [1, 2, 3];

// calling the function
addElement(arr);
