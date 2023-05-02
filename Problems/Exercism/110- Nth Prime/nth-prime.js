



/**
  #Instructions
  Given a number n, determine what the nth prime is.

  By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

  If your language provides methods in the standard library to deal with prime numbers, pretend they don't exist and implement them yourself.
  
  02-May-2023
*/


const { floor, sqrt } = Math;
const isPrime = n => n > 1 && [...Array(floor(sqrt(n)) + 1).keys()]
  .slice(2)
  .every(factor => n % factor);
/**
 * I woke up this morning thinking, "I haven't written a confusing for loop in quite a while."
 */
export const prime = target => {
  if (target <= 0) throw new Error('there is no zeroth prime');
  let num = 2;
  for (let count = 1; count !== target; num += num === 2 ? 1 : 2, isPrime(num) && count++) { }
  return num;
};
