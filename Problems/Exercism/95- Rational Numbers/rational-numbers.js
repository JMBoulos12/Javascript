



/**
  #Instructions
  A rational number is defined as the quotient of two integers a and b, called the numerator and denominator, respectively, where b != 0.

  The absolute value |r| of the rational number r = a/b is equal to |a|/|b|.

  The sum of two rational numbers r₁ = a₁/b₁ and r₂ = a₂/b₂ is r₁ + r₂ = a₁/b₁ + a₂/b₂ = (a₁ * b₂ + a₂ * b₁) / (b₁ * b₂).

  The difference of two rational numbers r₁ = a₁/b₁ and r₂ = a₂/b₂ is r₁ - r₂ = a₁/b₁ - a₂/b₂ = (a₁ * b₂ - a₂ * b₁) / (b₁ * b₂).

  The product (multiplication) of two rational numbers r₁ = a₁/b₁ and r₂ = a₂/b₂ is r₁ * r₂ = (a₁ * a₂) / (b₁ * b₂).

  Dividing a rational number r₁ = a₁/b₁ by another r₂ = a₂/b₂ is r₁ / r₂ = (a₁ * b₂) / (a₂ * b₁) if a₂ is not zero.

  Exponentiation of a rational number r = a/b to a non-negative integer power n is r^n = (a^n)/(b^n).

  Exponentiation of a rational number r = a/b to a negative integer power n is r^n = (b^m)/(a^m), where m = |n|.

  Exponentiation of a rational number r = a/b to a real (floating-point) number x is the quotient (a^x)/(b^x), which is a real number.

  Exponentiation of a real number x to a rational number r = a/b is x^(a/b) = root(x^a, b), where root(p, q) is the qth root of p.

  * Implement the following operations:
  * addition, subtraction, multiplication and division of two rational numbers,
  
  absolute value, exponentiation of a given rational number to an integer power, exponentiation of a given rational number to a real (floating-point) power, 
  exponentiation of a real number to a rational number.
  Your implementation of rational numbers should always be reduced to lowest terms. 
  For example, 4/4 should reduce to 1/1, 30/60 should reduce to 1/2, 12/8 should reduce to 3/2, etc. 
  To reduce a rational number r = a/b, divide a and b by the greatest common divisor (gcd) of a and b. So, for example, gcd(12, 8) = 4, 
  so r = 12/8 can be reduced to (12/4)/(8/4) = 3/2.

  Assume that the programming language you are using does not have an implementation of rational numbers. 
   
  01-May-2023
*/


/**
 * Greatest common divisor of 2 numbers.
 * @param {number} a 
 * @param {number} b 
 */
const gcd = (a, b) => !b ? a : gcd(b, a % b);
/**
 * Rational class.
 */
export class Rational {
  constructor(a, b) {
    const gcdAB = Math.sign(b) * Math.abs(gcd(a, b));
    this.a = a / gcdAB;
    this.b = b / gcdAB;
  }
  add(r) {
    // Get an issue with negative 0:
    // new Rational(1, 2).add(new Rational(-1, 2)) -> new Rational(-0, 1)
    return new Rational(this.a * r.b + r.a * this.b, this.b * r.b);
  }
  sub(r) {
    return new Rational(this.a * r.b - r.a * this.b, this.b * r.b);
  }
  mul(r) {
    return new Rational(this.a * r.a, this.b * r.b);
  }
  div(r) {
    return new Rational(this.a * r.b, this.b * r.a);
  }
  abs() {
    return new Rational(Math.abs(this.a), Math.abs(this.b));
  }
  exprational(n) {
    return new Rational(this.a ** Math.abs(n), this.b ** Math.abs(n));
  }
  expreal(r) {
    return (r ** (1 / this.b)) ** this.a;
  }
  
  reduce() {
    return new Rational(this.a, this.b);
  }
}
