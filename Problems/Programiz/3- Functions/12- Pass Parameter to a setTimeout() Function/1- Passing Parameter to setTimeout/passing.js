



/*
  The setTimeout() method executes a block of code after the specified time. The method executes the code only once.

  The commonly used syntax of JavaScript setTimeout is:
  setTimeout(function, milliseconds);
  
  Its parameters are:
  * function - a function containing a block of code
  * milliseconds - the time after which the function is executed 
  
  Output  :
  This message is shown first
  Hello world
  
  In the above program, the greet() function is passed to the setTimeout().

  The greet() function then gets called after 3000 milliseconds (3 seconds).

  Hence, the program displays the text Hello world only once after 3 seconds.

  18-March-2023
*/


// program to pass parameter to a setTimeout() function

function greet() {
    console.log('Hello world');
}

// passing parameter
setTimeout(greet, 3000);
console.log('This message is shown first');
