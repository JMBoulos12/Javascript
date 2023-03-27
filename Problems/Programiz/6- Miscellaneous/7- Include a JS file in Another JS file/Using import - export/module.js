



/*
  In this example, you will learn to write a JavaScript program that will include a JS file into another JS file.
  
  Let's create a file named module.js (filename can be anything) with the following content:
  
  27-March-2023
*/


// program to include JS file into another JS file

const message = 'hello world';

const number = 10;

function multiplyNumbers(a, b) {
    return a * b;
}

// exporting variables and function
export { message, number, multiplyNumbers };
