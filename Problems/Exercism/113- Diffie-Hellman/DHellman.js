



/**
  #Instructions
  Diffie-Hellman key exchange.

  Alice and Bob use Diffie-Hellman key exchange to share secrets. 
  They start with prime numbers, pick private keys, generate and share public keys, and then generate a shared secret key.

  Step 0
  The test program supplies prime numbers p and g.

  Step 1
  Alice picks a private key, a, greater than 1 and less than p. Bob does the same to pick a private key b.

  Step 2
  Alice calculates a public key A.
  A = g**a mod p
  
  Using the same p and g, Bob similarly calculates a public key B from his private key b.

  Step 3
  Alice and Bob exchange public keys. Alice calculates secret key s.
  s = B**a mod p
  
  Bob calculates
  s = A**b mod p
  
  The calculations produce the same result! Alice and Bob now share secret s.
  
  04-May-2023
*/


const { floor, sqrt } = Math;
const isFactor = n => factor => n % factor === 0;
const rangeSqrt = (min, n) => [...Array(floor(sqrt(n)) + 1).keys()].slice(min);
const factors = n => rangeSqrt(2, n).flatMap(num => isFactor(n)(num) ? [...new Set([num, n / num])] : []);
const isPrime = n => n > 1 && !rangeSqrt(2, n).some(isFactor(n));
/**
 * I took a shortcut here since we know n is prime. For this function to be a true primitive root check, we would need
 * to get the factors of the result of passing n into Euler's totient function.
 * 
 * https://en.wikipedia.org/wiki/Primitive_root_modulo_n#Definition
 */
const isPrimitiveRoot = n => root => n > 1 && factors(n - 1).every(factor => root ** factor % n !== 1);
export class DiffieHellman {
  #p;
  #g;
  constructor(p, g) {
    if (!isPrime(p)) throw new Error('p must be prime.');
    if (!isPrimitiveRoot(p)(g)) throw new Error('g must be a primitive root of p.');
    [this.#p, this.#g] = [p, g];
  }
  getPublicKey(a) {
    if (a <= 1 || a >= this.#p) throw new Error('Private key must be between 1 and p.');
    return this.#g ** a % this.#p;
  }
  getSecret(B, a) {
    return B ** a % this.#p;
  }
}
