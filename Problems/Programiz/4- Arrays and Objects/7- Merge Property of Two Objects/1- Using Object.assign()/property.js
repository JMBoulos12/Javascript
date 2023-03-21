



/*
  In this example, you will learn to write a JavaScript program that will merge the property of two objects.
  
  Output  :
  
  {
      name: "Jack",
      age: 26,
      gender: "male"
  }
  In the above example, two objects are merged into one using the Object.assign() method.

  The Object.assign() method returns an object by copying the values of all enumerable properties from one or more source objects.

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
const newObj = Object.assign(person, student);

console.log(newObj);
