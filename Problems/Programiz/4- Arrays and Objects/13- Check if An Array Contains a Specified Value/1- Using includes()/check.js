



/*
  In this example, you will learn to write a JavaScript program that will check if an array contains a specified value.
  
  Output  :
  Array contains a value.
  
  In the above program, the includes() method is used to check if an array contains a specified value.

  * The includes() method returns true if the value exists in the array.
  * The if...else statement is used to display the result as per the condition.

  21-March-2023
*/


// program to check if an array contains a specified value

const array = ['you', 'will', 'learn', 'javascript'];

const hasValue = array.includes('javascript');

// check the condition
if(hasValue) {
    console.log('Array contains a value.');
} else {
    console.log('Array does not contain a value.');
}
