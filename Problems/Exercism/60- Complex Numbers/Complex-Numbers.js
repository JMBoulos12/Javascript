



/**
  #Instructions
  A complex number is a number in the form a + b * i where a and b are real and i satisfies i^2 = -1.

  a is called the real part and b is called the imaginary part of z. The conjugate of the number a + b * i is the number a - b * i. 
  The absolute value of a complex number z = a + b * i is a real number |z| = sqrt(a^2 + b^2). 
  The square of the absolute value |z|^2 is the result of multiplication of z by its complex conjugate.

  The sum/difference of two complex numbers involves adding/subtracting their real and imaginary parts separately: 
  (a + i * b) + (c + i * d) = (a + c) + (b + d) * i, (a + i * b) - (c + i * d) = (a - c) + (b - d) * i.

  Multiplication result is by definition (a + i * b) * (c + i * d) = (a * c - b * d) + (b * c + a * d) * i.

  The reciprocal of a non-zero complex number is 1 / (a + i * b) = a/(a^2 + b^2) - b/(a^2 + b^2) * i.

  Dividing a complex number a + i * b by another c + i * d gives: (a + i * b) / (c + i * d) = (a * c + b * d)/(c^2 + d^2) + (b * c - a * d)/(c^2 + d^2) * i.

  Raising e to a complex exponent can be expressed as e^(a + i * b) = e^a * e^(i * b), the last term of which is given by Euler's formula e^(i * b) = cos(b) + i * sin(b).

  Implement the following operations:

  * addition, subtraction, multiplication and division of two complex numbers,
  * conjugate, absolute value, exponent of a given complex number.
  
  Assume the programming language you are using does not have an implementation of complex numbers.
  
  20-April-2023
*/


export class ComplexNumber {
  constructor(real, imag = 0) {
    this.real = real;
    this.imag = imag;
  }
  get abs() {
    const { real, imag } = this;
    return Math.sqrt(real * real + imag * imag);
  }
  get exp() {
    const { real, imag } = this
    const { E, cos, sin } = Math
    return new ComplexNumber(E ** real).mul(new ComplexNumber(cos(imag), sin(imag)));
  }
  get conj() {
    return new ComplexNumber(this.real, this.imag === 0 ? 0 : -this.imag);
  }
  add(b) {
    const { real, imag } = this;
    return new ComplexNumber(real + b.real, imag + b.imag);
  }
  sub(b) {
    const { real, imag } = this;
    return new ComplexNumber(real - b.real, imag - b.imag);
  }
  mul(b) {
    const { real, imag } = this;
    return new ComplexNumber(real * b.real - imag * b.imag, imag * b.real + real * b.imag);
  }
  div(b) {
    const { real, imag } = this;
    return new ComplexNumber(
      (real * b.real + imag * b.imag) / (b.real ** 2 + b.imag ** 2),
      (imag * b.real - real * b.imag) / (b.real ** 2 + b.imag ** 2))
  }
}
