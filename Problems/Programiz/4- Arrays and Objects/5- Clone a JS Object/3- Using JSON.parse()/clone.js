



/*
  Output  :

  {name: "John", age: 21}
  Peter
  John
  
  In the above program, the JSON.parse() method is used to clone an object.

  Note: JSON.parse() only works with Number and String object literal. 
        It does not work with an object literal with function or symbol properties.

  21-March-2023
*/


// program to clone the object
// declaring object
const person = {
    name: 'John',
    age: 21,
}

// cloning the object
const clonePerson = JSON.parse(JSON.stringify(person));

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = 'Peter';

console.log(clonePerson.name);
console.log(person.name);
