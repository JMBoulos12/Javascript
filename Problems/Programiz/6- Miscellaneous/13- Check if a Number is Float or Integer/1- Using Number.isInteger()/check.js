



/*
  In this example, you will learn to write a JavaScript program that will check if a number is a float or an integer value.
  
  Output  :
  hello is not a number
  44 is integer.
  3.4 is a float value.
  -3.4 is a float value.
  NaN is not a number
  
  In this program, the passed value is checked if it is an integer value or a float value.

  * The typeof operator is used to check the data type of the passed value.
  * The isNaN() method checks if the passed value is a number.
  * The Number.isInteger() method is used to check if the number is an integer value.

  27-March-2023
*/


// program to check if a number is a float or integer value

function checkNumber(x) {

    // check if the passed value is a number
    if(typeof x == 'number' && !isNaN(x)){
    
        // check if it is integer
        if (Number.isInteger(x)) {
            console.log(`${x} is integer.`);
        }
        else {
            console.log(`${x} is a float value.`);
        }
    
    } else {
        console.log(`${x} is not a number`);
    }
}

checkNumber('hello');
checkNumber(44);
checkNumber(3.4);
checkNumber(-3.4);
checkNumber(NaN);
