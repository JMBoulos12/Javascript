



/*
  Output  :
  Enter a string: hello
  olleh
  
  In the above program, the built-in methods are used to reverse a string.

  * First, the string is split into individual array elements using the split() method. 
    str.split("") gives ["h", "e", "l", "l", "o"].
  * The string elements are reversed using the reverse() method. 
    arrayStrings.reverse() gives ["o", "l", "l", "e", "h"].
  * The reversed string elements are joined into a single string using the join() method. 
    reverseArray.join("") gives olleh.

  24-March-2023
*/


// program to reverse a string

function reverseString(str) {

    // return a new array of strings
    const arrayStrings = str.split("");
   
    // reverse the new created array elements
    const reverseArray = arrayStrings.reverse();
 
    // join all elements of the array into a string
    const joinArray = reverseArray.join("");
    
    // return the reversed string
    return joinArray;
}
 
// take input from the user
const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);
