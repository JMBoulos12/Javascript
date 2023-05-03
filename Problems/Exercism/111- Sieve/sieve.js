



/**
  #Instructions
  Use the Sieve of Eratosthenes to find all the primes from 2 up to a given number.

  The Sieve of Eratosthenes is a simple, ancient algorithm for finding all prime numbers up to any given limit. 
  It does so by iteratively marking as composite (i.e. not prime) the multiples of each prime, starting with the multiples of 2. 
  It does not use any division or remainder operation.

  Create your range, starting at two and continuing up to and including the given limit. (i.e. [2, limit])

  The algorithm consists of repeating the following over and over:

  * take the next available unmarked number in your list (it is prime)
  * mark all the multiples of that number (they are not prime)
    
  Repeat until you have processed each number in your range.

  When the algorithm terminates, all the numbers in the list that have not been marked are prime.

  The wikipedia article has a useful graphic that explains the algorithm: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

  Notice that this is a very specific algorithm, and the tests don't check that you've implemented the algorithm, 
  only that you've come up with the correct list of primes. 
  A good first test is to check that you do not use division or remainder operations (div, /, mod or % depending on the language).
  
  03-May-2023
*/


function primes(limit) {
  const maybe_primes = Array.from({ length: limit + 1 }, () => true)
  for (let i = 2; i <= Math.sqrt(limit); i++) {
    if (!maybe_primes[i]) continue
    let j = i * i
    while (j <= limit) {
      maybe_primes[j] = false
      j += i
    }
  }
  maybe_primes.splice(0, 2)
  return maybe_primes.reduce((primes, isPrime, i) => {
    if (isPrime) primes.push(i + 2)
    return primes
  }, [])
}
export { primes }
