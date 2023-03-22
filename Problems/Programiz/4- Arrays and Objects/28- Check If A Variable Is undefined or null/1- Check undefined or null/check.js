



/*
  Output  :
  The variable is neither undefined nor null
  The variable is neither undefined nor null
  The variable is undefined or null
  The variable is undefined or null
  
  In this program, a variable is checked if it is equivalent to null. The null with == checks for both null and undefined values. This is because null == undefined evaluates to true.

  The following code:
  if(variable == null) { ... }
  
  is equivalent to
  if (variable === undefined || variable === null) { ... }

  22-March-2023
*/


// program to check if a variable is undefined or null

function checkVariable(variable) {

    if(variable == null) {
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
