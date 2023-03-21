



/*
  In this example, you will learn to write a JavaScript program that will merge the property of two objects.
  
  Output  :
  
  {
      name: "Jack",
      age: 26,
      gender: "male"
  }
  In the above example, two objects are merged together using the spread operator ....

  Note: In both the above examples, if the two objects have the same key, then the second object's key overwrites the first object's key.

  21-March-2023
*/


// program to merge property of two objects

// object 1
const person = {
    name: 'Jack',
    age:26
}

// object 2
const student = {
    gender: 'male'
}

// merge two objects
const newObj = {...person, ...student};

console.log(newObj);
