



/*
  Output  :
  [1, 2, 3]
  []
  
  In the above program, the splice() method is used to remove all the elements of an array.

  In the splice() method,

  * The first argument is the index of an array to start removing an item from.
  * The second argument is the number of elements that you want to remove from the index element.

  22-March-2023
*/


// program to append an object to an array

function emptyArray(arr) {

    // substituting new array
    arr.splice(0, arr.length);
    
    return arr;
}

const array = [1, 2 ,3];
console.log(array);

// call the function
const result = emptyArray(array);
console.log(result);
