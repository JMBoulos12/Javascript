



/*
  Output  :
  [1, 4, 8]
  
  In the above program, the property value of key a is extracted from each object of an array.

  * Initially, the extractedValue array is empty.
  * The for loop is used to iterate through all the elements of an array.
  * During each iteration, the value of property a is pushed to the extractedValue array.

  22-March-2023
*/


// program to extract value as an array from an array of objects

function extractValue(arr, prop) {

    let extractedValue = [];

    for (let i=0; i < arr.length ; ++i) {

        // extract value from property
        extractedValue.push(arr[i][prop]);
    }
    return extractedValue;
}

const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// passing an array of objects and property 'a' to extract
const result = extractValue(objArray, 'a');
console.log(result);
