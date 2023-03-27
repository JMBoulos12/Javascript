



/*
  Output  :
  gyjvo
  
  In the above example, built-in methods are used to generate random characters.

  The Math.random() method generates the random number between 0 and 1.

  In toString(36) method, 36 represents base 36. The toString(36) represents digits beyond 9 by letters.

  The substring(2, 7) method returns five characters.

  Note: In the above examples, the output varies each time because random characters are generated at every execution.

  27-March-2023
*/


// program to generate random strings

const result = Math.random().toString(36).substring(2,7);
console.log(result);
