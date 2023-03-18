



/*
  Output  :
  object
  John
  reading
  Hello everyone.
  90
  
  Here, the new keyword is used with the Object() instance to create an object. 

  18-March-2023
*/


// program to create JavaScript object using instance of an object
const person = new Object ( { 
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
});

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);
