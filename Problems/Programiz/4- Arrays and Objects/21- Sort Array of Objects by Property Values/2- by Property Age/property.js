



/*
  
  In this example, you will learn to write a JavaScript program that will sort an array of objects by property values.
  
  Output

  [{name: "John", age: 22},
  {name: "Sara", age: 24},
  {name: "Jack", age: 27}]
  
  In this program, the sort() method is used to sort an array element by the age property.

  To compare the age property of two objects, we can simply subtract them.

  * If their difference is a negative value, their order is changed.
  * If their difference is a positive value, the order is left as is.

  22-March-2023
*/


// program to sort array by property name

function compareAge(a, b) {

    return a.age - b.age;
}

const students = [{name: 'Sara', age:24},{name: 'John', age:22}, {name: 'Jack', age:27}];

console.log(students.sort(compareAge));
