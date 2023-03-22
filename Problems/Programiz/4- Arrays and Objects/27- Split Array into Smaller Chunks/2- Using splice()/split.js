



/*
  Output  :
  [1, 2]
  [3, 4]
  [5, 6]
  [7, 8]
  
  In this program, the while loop is used with the splice() method to split an array into smaller chunks of an array.

  In the splice() method,

  * The first argument specifies the index where you want to split an item.
  * The second argument (here 2) specifies the number of items to split.
  
  The while loop is used to iterate over the array until the array is empty.

  22-March-2023
*/


// program to split array into smaller chunks

function splitIntoChunk(arr, chunk) {

    while(arr.length > 0) {

        let tempArray;
        tempArray = arr.splice(0, chunk);
        console.log(tempArray);
    }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunk = 2;
splitIntoChunk(array, chunk);
