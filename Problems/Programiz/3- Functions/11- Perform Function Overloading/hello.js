



/*
  In this example, you will learn to write a JavaScript program that will pass a function as a parameter. 
  
  Output  :

  Hello John
  Hello Jack
  Hello Sara
  
  In the above program, there are two functions: name() and greet().

  * The name() function takes two parameters.
  * The greet() function is passed as an argument to the name() function.

  18-March-2023
*/


// program to pass a function as a parameter

function greet() {
    return 'Hello';
}

// passing function greet() as a parameter
function name(user, func)
{

    // accessing passed function
    const message = func();

    console.log(`${message} ${user}`);
}

name('John', greet);
name('Jack', greet);
name('Sara', greet);
