



/*
  Output  :
  Array contains a value.
  
  In the above program, the indexOf() method is used with the if...else statement to check if an array contains a specified value.

  The indexOf() method searches an array and returns the position of the first occurrence. If the value cannot be found, it returns -1.

  Note: Both includes() and indexOf() are case sensitive. Hence, J and j are different.

  21-March-2023
*/


// program to check if an array contains a specified value

const array = ['you', 'will', 'learn', 'javascript'];

const hasValue = array.indexOf('javascript') !== -1;

// check the condition
if(hasValue) {
    console.log('Array contains a value.');
} else {
    console.log('Array does not contain a value.');
}
