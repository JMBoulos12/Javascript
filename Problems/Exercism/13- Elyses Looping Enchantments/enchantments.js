



/*
  # Instructions:
  As a budding magician, Elyse needs to analyze her deck in lots of different ways. To keep things simple, she only uses cards with values 1-10.

  1. Determine how many cards of a certain type are in the deck
  Elyse wants to know how many cards of a particular type she has in her deck.

  Write a function cardTypeCheck that takes two parameters: an array of cards (Elyse's deck) and the type of card to count. The function should use forEach and return the number of cards in the deck of the specified type.

  const cardType = 3;
  cardTypeCheck([1, 2, 3, 4], cardType);
  // => 1
  
  2. Determine how many odd or even cards there are
  For another trick, Elyse needs to know how many odd or even cards there are in her deck.

  Implement a function determineOddEvenCards that takes in two parameters: 
  an array of cards (Elyse's deck), and a boolean (true is analogous to 'even', and false is analogous to 'odd').

  This function should return a single number: the number of odd or even cards there are (depending on the value of the second argument) in the deck. 
  To practice, use a for...of loop in the function implementation this time.

  determineOddEvenCards([1, 2, 3, 1, 5, 6], true);
  // => 2

  determineOddEvenCards([1, 2, 3, 1, 5, 6], false);
  // => 4
  
  05-April-2023
*/


/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let count = 0
  stack.forEach((needle) => {
    count += needle === card ? 1 : 0
  })
  return count
  // When not using forEach we could:
  // return stack.filter((needle) => needle === card).length
  //
  // Or:
  // return stack.reduce((count, needle) => needle === card ? count + 1 : count, 0)
}
/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  const rest = type ? 0 : 1
  
  let count = 0
  
  for (const card of stack) {
    if (card % 2 === rest) {
      count += 1
    }
  }
  return count
  // When not using for of we could:
  // return stack.filter((needle) => needle % 2 === rest).length
  //
  // Or:
  // return stack.reduce((count, needle) => needle % 2 === rest ? count + 1 : count, 0)
}
