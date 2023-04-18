



/**
  #Instructions
  Parse and evaluate simple math word problems returning the answer as an integer.

  Iteration 0 — Numbers
  Problems with no operations simply evaluate to the number given.

  * What is 5?
    Evaluates to 5.

  # Iteration 1 — Addition
  Add two numbers together.

  * What is 5 plus 13?
    Evaluates to 18.

  Handle large numbers and negative numbers.

  #Iteration 2 — Subtraction, Multiplication and Division
  Now, perform the other three operations.

  What is 7 minus 5?
  2

  What is 6 multiplied by 4?
  24

  What is 25 divided by 5?
  5

  #Iteration 3 — Multiple Operations
  Handle a set of operations, in sequence.

  Since these are verbal word problems, evaluate the expression from left-to-right, ignoring the typical order of operations.

  What is 5 plus 13 plus 6?
  24

  What is 3 plus 2 multiplied by 3?
  15 (i.e. not 9)

  #Iteration 4 — Errors
  
  The parser should reject:

  * Unsupported operations ("What is 52 cubed?")
  * Non-math questions ("Who is the President of the United States")
  * Word problems with invalid syntax ("What is 1 plus plus 2?")
  
  #Bonus — Exponentials
  If you'd like, handle exponentials.

  What is 2 raised to the 5th power?
  32
  
  18-April-2023
*/


export const answer = str => {
	// Define error constants:
	const ERR = {
		SYN: `Syntax error`,
		UNK_OP: `Unknown operation`,
	};
	// Validation: Question should start with "What is ",
	// invalid otherwise
	if (!str.startsWith(`What is`)) throw ERR.UNK_OP;
	
	// Remove starting "What is " and ending "?"
	str = str.slice(8, -1);
	// Validation: If there is nothing left after removing these,
	// throw syntax error (e.g. case of "What is?")
	if (!str) throw ERR.SYN;
	// Convert operations into their respective operators:
	// "plus" -> "+"
	// "minus" -> "-"
	// "multiplied by" -> "*"
	// "divided by" -> "/"
	// "raised to the Nth power" -> "**"
	[
		[/plus/g, '+'],
		[/minus/g, '-'],
		[/multiplied by/g, '*'],
		[/divided by/g, '/'],
		[/raised to the (-?\d*)\w* power/g, '** $1'],
	].forEach(([rx, op]) => str = str.replace(rx, op));
	
	// Only numbers and operators should be left in <str> after this.
	// If there are any words left after this, they are unknown operations,
	// and an error should be thrown
	if (/[a-z]/i.test(str)) throw ERR.UNK_OP;
	// Split statement at spaces to separate so that each element should be
	// a number or operator (or, if it contains a syntax error, something
	// else)
	str = str.split(' ');
	// Parse helper functions:
	// Define checks for valid operations list and numbers
	const isOp = o => ['+', '-', '*', '/', '**'].includes(o);
	const isNum = n => /^-?\d+$/.test(n);
	// Parse statement while there is more than one statement remaining
	while (str.length !== 1) {
		// If for any reason we are left with a zero-length array or an
		// array with only 2 elements, throw error
		if (!str.length || str.length === 2) throw ERR.SYN;
		// Evaluate the first three array elements: 0 and 2 should be numbers,
		// 1 should be a valid operation. If any of these are untrue, throw error
		if (!isNum(str[0]) || !isOp(str[1]) || !isNum(str[2])) throw ERR.SYN;
		
		// If we are left with a valid num-op-num sequence for the first three
		// elements, replace them with the evaluated expression
		str = [eval(`(${str[0]})${str[1]}(${str[2]})`)].concat(str.slice(3));
	}
	
	// Return the number version of the remaining number held in str[0]
	return +str[0];
};
