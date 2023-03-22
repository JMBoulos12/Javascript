



/*
  In this example, you will learn to write a JavaScript program that will check if an object is an array.
  
  Output  :
  [1,2,3] is an array.
  
  In the above program, the Array.isArray() method is used to check if an object is an array.

  The Array.isArray() method returns true if an object is an array, otherwise returns false.

  Note: For an array, the typeof operator returns an object.

  For example,

  const arr = [1, 2, 3];
  console.log(typeof arr); // object

  22-March-2023
*/


// program to check if an object is an array

function checkObject(arr) {

    // check if arr is array
    const result = Array.isArray(arr);

    if(result) {
        console.log(`[${arr}] is an array.`);
    }
    else {
        console.log(`${arr} is not an array.`);
    }

}

const array = [1, 2, 3];

// call the function
checkObject(array);
