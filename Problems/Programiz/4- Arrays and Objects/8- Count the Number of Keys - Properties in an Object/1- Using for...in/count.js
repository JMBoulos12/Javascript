



/*
  In this example, you will learn to write a JavaScript program that will count the number of keys/properties in an object.
  
  Output  :
  3
  
  The above program counts the number of keys/properties in an object using the for...in loop.

  The count variable is initially 0. Then, the for...in loop increases the count by 1 for every key/value in an object.

  Note: While using the for...in loop, it will also count inherited properties.
  
  For example :
  
  const student = { 
  name: 'John',
  age: 20,
  hobbies: ['reading', 'games', 'coding'],
  };

  const person = {
      gender: 'male'
  }

  student.__proto__ = person;

  let count = 0;

  for(let key in student) {

      // increase the count
      ++count;
  }

  console.log(count); // 4
  
  If you only want to loop through the object's own property, you can use the hasOwnProperty() method.

  if (student.hasOwnProperty(key)) {
      ++count:
  }

  21-March-2023
*/


// program to count the number of keys/properties in an object

const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

let count = 0;

// loop through each key/value
for(let key in student) {

    // increase the count
    ++count;
}

console.log(count);
