



/*
  In this example, you will learn to create JavaScript objects in different ways.
  
  You can create an object in three different ways:

  1. Using object literal
  2. By creating instance of Object directly
  3. By using constructor function 
  
  Output  :

  object
  John
  reading
  Hello everyone.
  90
  
  In this program, we have created an object named person.

  You can create an object using an object literal. An object literal uses { } to create an object directly.

  An object is created with a key:value pair.

  You can also define functions, arrays and even objects inside of an object. You can access the value of the object using dot " . " notation.

  18-March-2023
*/


// program to create JavaScript object using object literal
const person = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);
