



/*
  In this example, you will learn to write a JavaScript program that will split an array into smaller chunks of array.
  
  Output  :
  [1, 2]
  [3, 4]
  [5, 6]
  [7, 8]
  
  In the above program, the for loop is used with the slice() method to split an array into smaller chunks of array.

  The for loop iterates through the elements of an array. During each iteration, the value of i is increased by chunk value (here 2).

  The slice() method extracts elements from an array where:

  * The first argument specifies the starting index.
  * The second argument specifies the ending index.

  22-March-2023
*/


// program to split array into smaller chunks

function splitIntoChunk(arr, chunk) {

    for (i=0; i < arr.length; i += chunk) {

        let tempArray;
        tempArray = arr.slice(i, i + chunk);
        console.log(tempArray);
    }

}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunk = 2;
splitIntoChunk(array, chunk);
