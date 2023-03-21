



/*
  In this example, you will learn to write a JavaScript program that will convert objects to strings.

  Output  :

  {"name":"Jack","age":27}
  string
  
  In this example, the JSON.stringify() method is used to convert an object to a string.

  The typeof operator gives the data type of the result variable.

  21-March-2023
*/


// program to convert an object to a string

const person = {
    name: 'Jack',
    age: 27
}

const result =  JSON.stringify(person);

console.log(result);
console.log(typeof result);
