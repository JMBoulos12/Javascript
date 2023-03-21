



/*
  Output  :
  
  name - John
  age - 20
  hobbies - ["reading", "games", "coding"]
  
  In the above example, the for...in loop is used to loop through the student object.

  The value of each key is accessed by using student[key].

  Note: The for...in loop will also count inherited properties.
  
  For example :

  const student = { 
      name: 'John',
      age: 20,
      hobbies: ['reading', 'games', 'coding'],
  };

  const person = {
      gender: 'male'
  }

  // inheriting property
  student.__proto__ = person;

  for (let key in student) { 
      let value;

      // get the value
      value = student[key];

      console.log(key + " - " +  value);
  }
  
  Output  :
  
  name - John
  age - 20
  hobbies - ["reading", "games", "coding"]
  gender - male
  
  If you want, you can only loop through the object's own property by using the hasOwnProperty() method.

  if (student.hasOwnProperty(key)) {
      ++count:
  }

  21-March-2023
*/


// program to loop through an object using for...in loop

const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

// using for...in
for (let key in student) { 
    let value;

    // get the value
    value = student[key];

    console.log(key + " - " +  value); 
} 
