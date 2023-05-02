



/**
  #Instructions
  Write a function to solve alphametics puzzles.

  Alphametics is a puzzle where letters in words are replaced with numbers.

  For example SEND + MORE = MONEY:

    S E N D
    M O R E +
  -----------
  M O N E Y
  
  Replacing these with valid numbers gives:

    9 5 6 7
    1 0 8 5 +
  -----------
  1 0 6 5 2
  
  This is correct because every letter is replaced by a different number and the words, translated into numbers, then make a valid sum.

  Each letter must represent a different digit, and the leading digit of a multi-digit number must not be zero.

  Write a function to solve alphametics puzzles.
  
  02-May-2023
*/


const FULCRUM = ' == ';
const DIGITS = [...Array(10).keys()];
const evalPermutation = (letterCounts, digits) => letterCounts
  .reduce((sum, [, count], i) => sum + count * digits[i], 0) === 0
  ? Object.fromEntries(letterCounts.map(([letter], i) => [letter, digits[i]]))
  : null;
const tryPermutations = (terms, letterCounts, digits = []) => {
  if (digits.length === letterCounts.length) return evalPermutation(letterCounts, digits);
  for (const testDigit of DIGITS) {
    if ([
      digits.includes(testDigit),
      testDigit === 0 && terms.some(term => term[0] === letterCounts[digits.length][0])
    ].some(assertion => assertion)) continue;
    const result = tryPermutations(terms, letterCounts, [...digits, testDigit]);
    if (result) return result;
  }
  return null;
};
const countLetters = expressions => Object.entries(expressions
  .reduce((counts, exp, right) => exp.reduce((counts, term) => [...term].reduceRight((counts, letter, i, { length }) =>
    ({ ...counts, [letter]: ~~counts[letter] + 10 ** (length - 1 - i) * (right ? -1 : 1) }),
    counts), counts), {}));
export const solve = equation => {
  const expressions = equation
    .split(FULCRUM)
    .map(expression => expression.match(/\w+/g))
  return tryPermutations(expressions.flat(), countLetters(expressions));
};
