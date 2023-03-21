



/*
  Output  :
  {name: "John", age: 21}
  Peter
  John
  
  The spread syntax ... was introduced in the later version(ES6).
  
  The spread syntax can be used to make a shallow copy of an object. This means it will copy the object. 
  However, the deeper objects are referenced. For example,
  
  const person = {
    name: 'John',
    age: 21,

    // the inner objects will change in the shallow copy
    marks: { math: 66, english: 73}
  }

  // cloning the object
  const clonePerson = { ... person}

  console.log(clonePerson); // {name: "John", age: 21, marks: {…}}

  // changing the value of clonePerson
  clonePerson.marks.math = 100;

  console.log(clonePerson.marks.math); // 100
  console.log(person.marks.math); // 100
  
  Here, when the inner object value math is changed to 100 of clonePerson object, the value of the math key of the person object also changes.
  
  21-March-2023
*/


// program to clone the object
// declaring object
const person = {
    name: 'John',
    age: 21,
}

// cloning the object
const clonePerson = { ... person}

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = 'Peter';

console.log(clonePerson.name);
console.log(person.name);
