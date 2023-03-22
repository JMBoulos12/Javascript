



/*
  In this example, you will learn to write a JavaScript program that will get a random item from an array.
  
  Output  :
  'hello'
  
  In this program, a random item from an array is accessed.

  * A random number between 0 to array.length is generated using the Math.random() method.
  * The Math.floor() returns the nearest integer value generated by Math.random().
  * This random index is then used to access a random array element.

  22-March-2023
*/


// program to get a random item from an array

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const array = [1, 'hello', 5, 8];

const result = getRandomItem(array);
console.log(result);
