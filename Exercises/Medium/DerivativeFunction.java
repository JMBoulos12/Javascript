




/*
  Create a function that takes numbers b and m as arguments and returns the derivative of the function f(x)=x^b with respect to x evaluated at x=m, where b and m are constants.

  Examples  :
  derivative(1, 4) ➞ 1

  derivative(3, -2) ➞ 12

  derivative(4, -3) ➞ -108

  Notes :
  ^ in the context of this challenge means "to the power of", also known as the "exponent" operator. 
  
  24-January-2023
*/

function derivative(b, m) {
  return b * m ** (b - 1)
  }
