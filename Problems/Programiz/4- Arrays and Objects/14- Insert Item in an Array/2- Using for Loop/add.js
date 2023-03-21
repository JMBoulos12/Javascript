



/*
  Output
  [1, 2, 3, 8, 4]
  
  In this program,

  * The for loop is used to iterate through the array elements.
  * The element is added to the given index.
  * All the elements whose index is greater than the given index are shifted one step to the right.

  21-March-2023
*/


// program to insert an item at a specific index into an array

function insertElement() {
    let array = [1, 2, 3, 4];

    // index to add to
    let index = 3;

    // element that you want to add
    let element = 8;
  
    for (let i = array.length; i > index; i--) {

        //shift the elements that are greater than index
        array[i] = array[i-1];
    }

    // insert element at given index
    array[index] = element;

    console.log(array);
}

insertElement();
