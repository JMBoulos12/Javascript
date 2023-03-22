



/*
  Output  :
  [4, 1, 2, 3]
  
  In the above program, the concat() method is used to add a new element to an array.

  The concat() method combines two arrays into one.

  22-March-2023
*/


// program to add element to an array

function addElement(arr) {

    // adding element to array
    arr = [4].concat(arr);
    
    console.log(arr);
}

const array = [1, 2, 3];

// calling the function
addElement(array);
