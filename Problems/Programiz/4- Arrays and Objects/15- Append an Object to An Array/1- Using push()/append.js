



/*
  Output  :
  [1, 2, 3, {x: 12, y: 8}]
  
  In the above program, the push() method is used to add an object to an array.

  The push() method adds an item to the end of an array.

  21-March-2023
*/


// program to append an object to an array

function insertObject(arr, obj) {

    // append object
    arr.push(obj);
    
    console.log(arr);
}

// original array
let array = [1, 2, 3];

// object to add
let object = {x: 12, y: 8};

// call the function
insertObject(array, object);
