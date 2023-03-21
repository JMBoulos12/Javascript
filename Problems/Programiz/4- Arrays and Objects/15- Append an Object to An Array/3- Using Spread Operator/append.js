



/*
  Output  :
  [1, 2, 3, {x: 12, y: 8}]
  
  In the above program, the spread operator ... is used to add an object to an array.

  The spread syntax allows you to copy all the elements to an array. Then, the object is added to the end of the array.

  21-March-2023
*/


// program to append an object to an array

function insertObject(arr, obj) {

   // append object
    arr = [...arr, object];
    
    console.log(arr);
}

// original array
let array = [1, 2, 3];

// object to add
let object = {x: 12, y: 8};

// call the function
insertObject(array, object);
