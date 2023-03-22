



/*
  write a JavaScript program that will check if a variable is undefined or null.
  
  Output  :

  The variable is neither undefined nor null
  The variable is neither undefined nor null
  The variable is undefined or null
  The variable is undefined or null
  
  The typeof operator for undefined value returns undefined. Hence, you can check the undefined value using typeof operator. Also, null values are checked using the === operator.

  Note: We cannot use the typeof operator for null as it returns object.

  22-March-2023
*/


// program to check if a variable is undefined or null

function checkVariable(variable) {

    if( typeof variable === 'undefined' || variable === null ) {
        console.log('The variable is undefined or null');
    }
    else {
       console.log('The variable is neither undefined nor null');
    }
}

let newVariable;

checkVariable(5);
checkVariable('hello');
checkVariable(null);
checkVariable(newVariable);
