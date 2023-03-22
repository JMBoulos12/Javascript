



/*
  In this example, you will learn to write a JavaScript program that will create a two dimensional array.
  
  Output  :
  [[0, 1, 2], [0, 1, 2]]
  
  In the above program, the first argument of the twoDimensionArray() function represents the number of array elements, and the second argument represents the number of array elements inside of each array element.

  The first for loop is used to create a two dimensional array. [[], []]

  The second for loop iterates over each array element and inserts the elements inside of an array element.

  When i = 0, the elements are inserted to the first array element [[0, 1, 2], []].

  When i = 1, the elements are inserted to the second array element [[0, 1, 2], [0, 1, 2]].

  22-March-2023
*/


// program to create a two dimensional array

function twoDimensionArray(a, b) {
    let arr = [];

    // creating two dimensional array
    for (let i = 0; i< a; i++) {
        for(let j = 0; j< b; j++) {
            arr[i] = [];
        }
    }

    // inserting elements to array
    for (let i = 0; i< a; i++) {
        for(let j = 0; j< b; j++) {
            arr[i][j] = j;
        }
    }
    return arr;
}

const x = 2;
const y = 3;

const result = twoDimensionArray(x, y);
console.log(result);
