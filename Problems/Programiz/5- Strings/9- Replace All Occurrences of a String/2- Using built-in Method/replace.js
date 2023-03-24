



/*
  Output  :
  Mr blue has a blue house and a blue car
  
  In the above program, the built-in split() and join() method is used to replace all the occurrences of the string.

  * T he string is split into individual array elements using the split() method.
    Here, string.split('red') gives ["Mr ", " has a ", " house and a ", " car"] by splitting the string.
  * The array elements are joined into a single string using the join() method.
    Here, reverseArray.join('blue') gives Mr blue has a blue house and a blue car by joining the array elements.

  24-March-2023
*/


// program to replace all occurrence of a string

const string = 'Mr red has a red house and a red car';

const result = string.split('red').join('blue');

console.log(result);
