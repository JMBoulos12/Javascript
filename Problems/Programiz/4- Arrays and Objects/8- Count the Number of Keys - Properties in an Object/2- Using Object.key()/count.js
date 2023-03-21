



/*
  Output  :
  3
  
  In this program, the Object.keys() method and the length property are used to count the number of keys in an object.

  The Object.keys() method returns an array of a given object's own enumerable property names i.e. ["name", "age", "hobbies"].

  The length property returns the length of the array.

  21-March-2023
*/


// program to count the number of keys/properties in an object

const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

// count the key/value
const result = Object.keys(student).length;

console.log(result);
