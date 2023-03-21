



/*
  In this example, you will learn to write a JavaScript program that checks if a key exists in an object.
  
  Output  :
  The key exists.
  
  In this program, the hasOwnProperty() method is used to check if a key exists in an object. 
  The hasOwnProperty() method returns true if the specified key is in the object, otherwise it returns false.

  21-March-2023
*/


// program to check if a key exists

const person = {
    id: 1,
    name: 'John',
    age: 23
}

//check if key exists
const hasKey = person.hasOwnProperty('name');

if(hasKey) {
    console.log('The key exists.');
}
else {
    console.log('The key does not exist.');
}
