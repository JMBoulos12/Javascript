



/*
  In this example, you will learn to write a JavaScript program that will convert a date to a number.
  
  Output  :
      Mon Nov 09 2020 10:52:32 GMT+0545 (Nepal Time)
      1604898452084
  
  In this example, the new Date() constructor is used to create a date object.

  The new Date() gives the current date and time.
      const d1 = new Date();
      console.log(d1); // Mon Nov 09 2020 10:52:32 GMT+0545 (Nepal Time)
  
  To convert the name to a number, we use the getTime() method.

  The getTime() method returns the number of milliseconds from midnight of January 1, 1970 (EcmaScript epoch) to the specified date.
      const d1 = new Date().getTime();
      console.log(d1); // 1604898452084

  27-March-2023
*/


// program to convert date to number
// create date
const d1 = new Date();
console.log(d1);

// converting to number
const result = d1.getTime();
console.log(result);
