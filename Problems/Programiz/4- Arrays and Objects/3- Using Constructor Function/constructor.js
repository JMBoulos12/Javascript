



/*
  You can create an object in three different ways:
  1-  Using object literal
  2-  By creating instance of Object directly
  3-  By using constructor function 
  
  Output  :
  object
  John
  reading
  Hello everyone.
  90
  
  In the above example, the " Person() " constructor function is used to create an object using the new keyword.

  " new Person() " creates a new object.

  18-March-2023
*/


// program to create JavaScript object using instance of an object

function Person() {
    this.name = 'John',
    this.age = 20,
    this.hobbies = ['reading', 'games', 'coding'],
    this.greet = function() {
        console.log('Hello everyone.');
    },
    this.score = {
        maths: 90,
        science: 80
    }

}

const person = new Person();

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);
