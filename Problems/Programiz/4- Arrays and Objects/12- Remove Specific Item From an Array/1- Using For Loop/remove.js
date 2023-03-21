



/*
  In this example, you will learn to write a JavaScript program that will remove a specific item from an array.
  
  Output  :
  [1, 3, 4, 5]
  
  In the above program, an item is removed from an array using a for loop.

  Here  :

  * The for loop is used to loop through all the elements of an array.
  * While iterating through the elements of the array, if the item to remove does not match with the array element, that element is pushed to newArray.
  * The push() method adds the element to newArray.

  21-March-2023
*/


// program to remove item from an array

function removeItemFromArray(array, n) {
    const newArray = [];

    for ( let i = 0; i < array.length; i++) {
        if(array[i] !== n) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const result = removeItemFromArray([1, 2, 3 , 4 , 5], 2);

console.log(result);
