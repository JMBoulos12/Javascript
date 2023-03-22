



/*
  Output  :
  [4, 1, 2, 3]
  
  In this program, the splice() method is used to add a new element to an array.

  In the splice() method,

  * The first argument is the index of an array where you want to add an element.
  * The second argument is the number of elements that you want to remove from the index element.
  * The third argument is the element that you want to add to the array.

  22-March-2023
*/


// program to add element to an array

function addElement(arr) {

    // adding element to array
    arr.splice(0, 0, 4);
    
    console.log(arr);
}

const array = [1, 2, 3];

// calling the function
addElement(array);
