



/*
  Output  :
  44 is an integer.
  -44 is an integer.
  3.4 is a float value.
  -3.4 is a float value.
  
  In this example, the regex pattern is used to check if the passed argument is an integer value or float value.

  The pattern /^-?[0-9]+$/ looks for the integer value.

  The test() method of the RegExp object is used to test the pattern with the given value.

  Note: The above program only works for numbers.

  27-March-2023
*/


// program to check if a number is a float or integer value

function checkNumber(x) {

    let regexPattern = /^-?[0-9]+$/;
    
    // check if the passed number is integer or float
    let result = regexPattern.test(x);
    
    if(result) {
        console.log(`${x} is an integer.`);
    }
    else {
        console.log(`${x} is a float value.`)
    }

}

checkNumber(44);
checkNumber(-44);
checkNumber(3.4);
checkNumber(-3.4);
