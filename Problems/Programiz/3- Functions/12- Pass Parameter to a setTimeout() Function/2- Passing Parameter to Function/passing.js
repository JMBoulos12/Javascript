



/*
  The setTimeout() method executes a block of code after the specified time. The method executes the code only once.

  The commonly used syntax of JavaScript setTimeout is:
  setTimeout(function, milliseconds);
  
  Its parameters are:

  function - a function containing a block of code
  milliseconds - the time after which the function is executed

  Output  :
  This message is shown first
  hello
  world
  In the above program, additional parameters x and y are required in the greet() function.

  When calling the setTimeout() function, additional arguments 'hello' and 'world' are passed which are used by the greet() function. 

  18-March-2023
*/


// program to pass parameter to function in setTimeout()
function greet(x, y) {
    console.log(x);
    console.log(y);
}

// passing parameter
setTimeout(greet, 3000, 'hello', 'world');
console.log('This message is shown first');
