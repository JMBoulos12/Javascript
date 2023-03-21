



/*
  Output  :
  name - John
  age - 20
  hobbies - ["reading", "games", "coding"]
  
  In the above program, the object is looped using the Object.entries() method and the for...of loop.

  The Object.entries() method returns an array of a given object's key/value pairs. The for...of loop is used to loop through an array.

  21-March-2023
*/


// program to loop through an object using for...in loop

const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

// using Object.entries
// using for...of loop
for (let [key, value] of Object.entries(student)) {
    console.log(key + " - " +  value);
}
