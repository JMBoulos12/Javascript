



/**
  #Instructions
  Given a natural radicand, return its square root.

  Note that the term "radicand" refers to the number for which the root is to be determined. That is, it is the number under the root symbol.

  Check out the Wikipedia pages on square root and methods of computing square roots.

  Recall also that natural numbers are positive real whole numbers (i.e. 1, 2, 3 and up).

  The idea is not to use the built-in javascript functions such as Math.sqrt(x), x ** 0.5 or x ** (1/2), it's to build your own.
  
  05-May-2023
*/


export const squareRoot = (num) => {
	var x = (num + 1)/2
	for (var i = 0; i < 10; i++){
		x = (1/2) * (x + num/x)
	}
	return Math.round(x)
};
