



/*
  Output  :
  8
  hello
  hello
  Hello John
  Hello John
  {
    age: 28,
    name: "John"
  }
  The console.log() method is used to write to the console. 
  You can pass values directly into the method or pass a variable to write to a console.

  17-March-2023
*/


// program to write to console

// passing number 
console.log(8);

// passing string
console.log('hello');

// passing variable
const x = 'hello';
console.log(x);

// passing function
function sayName() {
    return 'Hello John';
}
console.log(sayName());

// passing string and a variable
const name = 'John';
console.log('Hello ' + name);

// passing object
let obj = {
    name: 'John',
    age: 28
}
console.log(obj);
