



/*
  Output  :
  [object Object]
  Jack
  string
  
  In this example, the String() function converts the value of an object to a string.

  When using the String() function on an Object, the converted result will give [object Object].

  The typeof operator gives the data type of the result variable.

  21-March-2023
*/


// program to convert an object to a string

const person = {
    name: 'Jack',
    age: 27
}

const result1 = String(person);
const result2 = String(person['name']);

console.log(result1);
console.log(result2);

console.log(typeof result1);
