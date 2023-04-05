



/*
  #Instructions
  Elyse, magician-to-be, continues her training. She has a deck of cards she wants to manipulate.

  To make things easier, she usually only starts with cards numbered 1 to 10, although some of the tricks may involve additional cards.

  1. Get the first card
  Elyse will summon the first card in the deck without using the array[index] or .shift(). It's just like magic.

  const deck = [5, 9, 7, 1, 8];

  getFirstCard(deck);
  // => 5
  
  2. Get the second card
  Elyse performs sleight of hand and summons the second card in the deck without using the array[index].

  const deck = [3, 2, 10, 6, 7];

  getSecondCard(deck);
  // => 2
  
  3. Swap the first two cards
  Elyse will make the top two cards of the deck switch places. She doesn't need to call a single function.

  const deck = [10, 7, 3, 8, 5];

  swapTopTwoCards(deck);
  // => [7, 10, 3, 8, 5]
  
  4. Discard the top card
  Elyse will separate the deck into two piles. The first pile will contain only the top card of the original deck, 
  while the second pile will contain all the other cards.

  const deck = [2, 5, 4, 9, 3];

  discardTopCard(deck);
  // => [2, [5, 4, 9, 3]]
  
  5. Insert face cards
  Elyse will insert a set of face cards (i.e. jack, queen, and king) into her deck such that they become the second, third, and fourth cards, respectively.

  const deck = [5, 4, 7, 10];

  insertFaceCards(deck);
  // => [5, 'jack', 'queen', 'king', 4, 7, 10]
  
  05-April-2023
*/


/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export function getFirstCard([firstCard,]) {
  return firstCard
}
/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
export function getSecondCard([,secondCard]) {
  return secondCard
}
/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */
export function swapTopTwoCards([newSecondCard, newFirstCard, ...cards]) {
  return [newFirstCard, newSecondCard, ...cards]
}
/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
export function discardTopCard([topCard, ...notTopCards]) {
  return [topCard, notTopCards]
}
/** @type Card[] **/
const FACE_CARDS = ['jack', 'queen', 'king'];
/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
export function insertFaceCards([before, ...after]) {
  return [before, ...FACE_CARDS, ...after]
}
