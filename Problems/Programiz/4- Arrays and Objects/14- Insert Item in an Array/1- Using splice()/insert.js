



/*
  In this example, you will learn to write a JavaScript program that will insert an item at a specific index into an array.
  
  Output  :
  [1, 2, 3, 8, 4, 5]
  
  In the above program, the splice() method is used to insert an item with a specific index into an array.

  The splice() method adds and/or removes an item.

  In the splice() method,

  * The first argument specifies the index where you want to insert an item.
  * The second argument (here 0) specifies the number of items to remove.
  * The third argument specifies the element that you want to add to an array.

  21-March-2023
*/


// program to insert an item at a specific index into an array

function insertElement() {
    let array = [1, 2, 3, 4, 5];

    // index to add to
    let index = 3;

    // element that you want to add
    let element = 8;
  
    array.splice(index, 0, element);
    console.log(array);
}

insertElement();
