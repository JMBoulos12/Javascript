



/*
  A JavaScript object is a complex data type that can contain various data types. For example,

  const person = {
      name: 'John',
      age: 21,
  }
  
  Here, person is an object. Now, you can't clone an object by doing something like this.

  const copy = person;
  console.log(copy); // {name: "John", age: 21}
  
  In the above program, the copy variable has the same value as the person object. However, if you change the value of the copy object, the value in the person object will also change. For example,

  copy.name = 'Peter';
  console.log(copy.name); // Peter
  console.log(person.name); // Peter
  
  The change is seen in both objects because objects are reference types. And both <code>copy</code> and <code>person</code> are pointing to the same object.
  
  
  Output  :

  {name: "John", age: 21}
  Peter
  John
  
  The Object.assign() method is part of the ES6 standard. The Object.assign() method performs deep copy and copies all the properties from one or more objects.

  Note: The empty {} as the first argument ensures that you don't change the original object.

  21-March-2023
*/


// program to clone the object

// declaring object
const person = {
    name: 'John',
    age: 21,
}

// cloning the object
const clonePerson = Object.assign({}, person);

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = 'Peter';

console.log(clonePerson.name);
console.log(person.name);
