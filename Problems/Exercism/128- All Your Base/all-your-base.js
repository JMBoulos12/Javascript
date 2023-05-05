



/**
  #Instructions
  Convert a number, represented as a sequence of digits in one base, to any other base.

  Implement general base conversion. Given a number in base a, represented as a sequence of digits, convert it to base b.

  #Note
  * Try to implement the conversion yourself. Do not use something else to perform the conversion for you.
  
  #About Positional Notation
  In positional notation, a number in base b can be understood as a linear combination of powers of b.

  The number 42, in base 10, means:

  (4 _ 10^1) + (2 _ 10^0)

  The number 101010, in base 2, means:

  (1 _ 2^5) + (0 _ 2^4) + (1 _ 2^3) + (0 _ 2^2) + (1 _ 2^1) + (0 _ 2^0)

  The number 1120, in base 3, means:

  (1 _ 3^3) + (1 _ 3^2) + (2 _ 3^1) + (0 _ 3^0)

  I think you got the idea!

  Yes. Those three numbers above are exactly the same. Congratulations!
  
  05-May-2023
*/


const convertToBase = (num, base, numLength = 1 + ~~(Math.log(num) / Math.log(base))) =>
  numLength ? [...convertToBase(num / base | 0, base, numLength - 1), num % base] : [];
export const convert = (digits, a = 0, b = 0) => {
  if (a <= 1 || a % 1) throw new Error('Wrong input base');
  if (b <= 1 || b % 1) throw new Error('Wrong output base');
  if ([
    !digits.length,
    digits.length > 1 && digits[0] === 0,
    digits.some(digit => digit < 0 || digit >= a),
  ].some(assertion => assertion)) throw new Error('Input has wrong format');
  // Convert digits in base a to base 10 then convert that number to base b.
  return convertToBase(digits.reduce((num, digit) => digit + num * a), b);
};
