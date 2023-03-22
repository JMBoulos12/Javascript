



/*
  In this example, you will learn to write a JavaScript program that will extract the value of a property as an array from an array of objects.
  
  Output  :
  [1, 4, 8]
  
  In this program, the property's value of key a is extracted from each object of an array.

  The map() method is used to iterate through all the elements of an array and extract property values of key a.

  Note: You could also use a regular function instead of an arrow function.
        let extractedValue = arr.map(function(item) {return item[prop]});

  22-March-2023
*/


// program to extract value as an array from an array of objects

function extractValue(arr, prop) {

    // extract value from property
    let extractedValue = arr.map(item => item[prop]);

    return extractedValue;

}

const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// passing an array of objects and property 'a' to extract
const result = extractValue(objArray, 'a');
console.log(result);
