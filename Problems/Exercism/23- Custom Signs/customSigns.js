



/**
   #Introduction:
  In JavaScript, template strings allows for embedding expressions in strings, also referred to as string interpolation. 
  This functionality extends the functionality of the built-in String global object.

  You can create template strings in JavaScript by wrapping text in backticks. 
  They not only allow the text to include new lines and other special characters, but you can also embed variables and other expressions.

  const num1 = 1;
  const num2 = 2;

  `Adding ${num1} and ${num2} gives ${num1 + num2}.`;
  // => Adding 1 and 2 gives 3.
  In the example above, backticks - (``) - are used to represent a template string. The${...} is the placeholder that is used for substitution. 
  Any non-string types are implicitly converted to strings. This topic is covered in the type conversion concept. 
  All types of expressions can be used with template strings.

  const track = 'JavaScript';

  `This track on exercism.org is ${track.toUpperCase()}.`;
  // => This track on exercism.org is JAVASCRIPT.
  
  When you are needing to have strings formatted on multiple lines:

  `This is an example of using template
  strings to accomplish multiple
  lines`;
  
  With the available substitution capabilities, you can also introduce logic into the process to determine what the output string should be.

  An example of this is embedding a ternary operator. This operator is a short form for writing an if/else statement. 
  The syntax is condition ? consequent-expression : alternative-expression. 
  If the condition is truthy, the operand on the left-hand side of the colon will be returned. Otherwise, 
  the result of the ternary expression is the operand on the right-hand side of the colon.

  const grade = 95;

  `You have ${grade > 90 ? 'passed' : 'failed'} the exam.`;
  // => You have passed the exam.
  
  #Instructions:
  In this exercise you'll be writing code to help a sign company create custom messages for their signs.

  1. Build an occasion sign
  Implement the function buildSign(occasion, name) that accepts a string as the occasion parameter and a string holding someone's name as the name parameter. 
  The two parameters will be embedded into a template string to output the message on the sign.

  buildSign('Birthday', 'Rob');
  // => "Happy Birthday Rob!"
  
  2. Build a birthday sign
  Implement the function buildBirthdaySign(age) that accepts an age and based on the age will determine part of the message on the sign. 
  If the age is 50 or older, the sign will refer user as mature, else it will refer them as young. The exact expected output is shown below:

  buildBirthdaySign(50);
  // => "Happy Birthday! What a mature fellow you are."

  buildBirthdaySign(45);
  // => "Happy Birthday! What a young fellow you are."
  
  3. Build a graduation sign
  Implement the function graduationFor(name, year) which takes a name as a string parameter and a year as a number parameter 
  and uses string interpolation to create a phrase for a sign that uses a newline to separate the two lines of the message.

  graduationFor('Hannah', 2022);
  // => "Congratulations Hannah!\nClass of 2022"
  
  4. Compute the cost of a sign
  Implement the function costOf(sign, currency) which takes a string that holds the contents of the sign and a string that represents the currency. 
  The sign has a base price of 20 in the given currency. Additionally each letter costs. 2. (Whitespaces are included in the calculation.) 
  The phrase returned includes the cost to create the sign, written with two digits after the decimal point, followed by the currency string.

  costOf('Happy Birthday Rob!', 'dollars');
  // => "Your sign costs 58.00 dollars."
  
  13-April-2023
*/


/**
 * Build a sign that includes both of the parameters.
 *
 * @param {string} occasion
 * @param {string} name
 *
 * @returns {string} template string combining both parameters
 */
export function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`
}
/**
 * Build a birthday sign that conditionally formats the return string.
 *
 * @param {number} age
 *
 * @returns {string} template string based on age
 */
export function buildBirthdaySign(age) {
  const signifier = age >= 50 ? 'mature' : 'young'
  return `Happy Birthday! What a ${signifier} fellow you are.`
}
/**
 * Build a graduation sign that includes multiple lines.
 *
 * @param {string} name
 * @param {number} year
 *
 * @returns {string} multi-line template string
 */
export function graduationFor(name, year) {
  return `Congratulations ${name}!\nClass of ${year}`
}
/**
 * Determine cost based on each character of sign parameter that builds
 * the template string that includes the currency parameter.
 *
 * @param {string} sign
 * @param {string} currency
 *
 * @returns {string} cost to create the sign
 */
export function costOf(sign, currency) {
  const costs = 20 + sign.length * 2
  return `Your sign costs ${costs.toFixed(2)} ${currency}.`
}
