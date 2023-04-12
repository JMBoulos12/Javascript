



/**
  #Introduction
  In JavaScript, the Array class has many powerful built-in methods for transforming arrays. 
  These methods make it much easier to convert one array into another than it otherwise would be using a simple for loop or more direct manipulation.

  Some methods are pure, meaning that they do not modify the original array. They return a new one instead. 
  Other methods however manipulate the array they are called on and do not return the modified array.

  Some of the most commonly used methods to transform arrays are presented below. A full list of available methods can be found in the MDN documentation.

  #map (pure)
  Create a new array by transforming each element according to a function passed as an argument. These callback functions are often written as arrow functions.

  let arr = [1, 2, 3, 4];

  const newArr = arr.map((value) => value - 1);
  console.log(newArr);
  // => [0, 1, 2, 3]
  console.log(arr);
  // => [1, 2, 3, 4]
  
  It is worth noting that the resulting array will always be of the same length as the original.

  #filter (pure)
  Creates an array by filtering the current one, given a filtering function (that returns true if the element should be kept and false if it should be removed).

  let arr = [1, 2, 3, 4];

  arr.filter((value) => value % 2 === 0);
  // => [2, 4]
  
  #reduce (pure)
  Reduces the array to a single value using a function that takes an accumulator and the current element of the array as parameters. 
  This function instructs how the current element must be merged into the accumulator and returns the accumulator that will be used on the next iteration.

  let arr = [1, 2, 3, 4];

  // Get the sum of elements
  arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  // => 10

  // Classify the numbers by whether they are odd or not
  arr.reduce(
    (accumulator, currentValue) => {
      if (currentValue % 2 === 0) {
        accumulator.even.push(currentValue);
      } else {
        accumulator.odd.push(currentValue);
      }

      return accumulator;
    },
    { even: [], odd: [] }
  );
  // => { even: [2, 4], odd: [1, 3] }
  
  #reverse
  Reverses the elements of an array.

  const arr = [1, 2, 3, 4];

  arr.reverse();
  // => [4, 3, 2, 1]
  This method modifies the array it is called on.

  #slice (pure)
  Given a start and an end index, creates a sub-array from the array passed as a parameter.

  The element at the end index will not be included. Also, all parameters are optional: the start index defaults to 0, and the end index defaults to the array length.

  const arr = [1, 2, 3, 4];

  arr.slice(1, 2); // [2]
  arr.slice(1); // [2, 3, 4]
  // You can also use negative numbers, that represent the indexes
  // starting from the end of the array
  arr.slice(-2); // [3, 4]
  
  #splice
  Removes or replaces and/or adds new elements of an array.

  It takes the following parameters:

  * the index of the element where to start modifying the array
  * the number of elements to delete
  * the elements to insert in the array (optional)
  
  splice returns the elements that have been removed.

  const arr = ['1', '2', '5', '6'];

  // Insert an element at index 2
  arr.splice(2, 0, '3');
  console.log(arr);
  // => ['1', '2', '3', '5', '6']

  // Remove 2 elements, starting at index 3 and insert 2 elements
  const removed = arr.splice(3, 2, '4', '5');
  console.log(removed);
  // => ['5', '6']
  console.log(arr);
  // => ['1', '2', '3', '4', '5']

  // Remove 1 element at index 1
  arr.splice(1, 1);
  console.log(arr);
  // => ['1', '3', '4', '5']
  
  # sort
  By default, sort sorts the elements of an array by first converting them to strings and then applying string comparison (see Concept Comparison). 
  The sorting happens in-place which means the original array is modified. 
  sort also returns that modified array which is convenient if you want to chain other methods to it.

  const arr = ['c', 'a', 'z', 'b'];
  const result = arr.sort();
  console.log(result);
  // => ['a', 'b', 'c', 'z']
  console.log(arr);
  // => ['a', 'b', 'c', 'z']
  To customize the sorting behavior, you can pass a comparison function as an argument. 
  The comparison function itself is called with two arguments which are two elements of the array. It then needs to return the following:

  * a negative number if the first argument should be sorted before the second
  * a positive number if the first argument should be sorted after the second
  * 0 if the order of the elements should stay the same
  
  Here is an example of how to use a custom comparison function can be used to sort an array of objects.

  const arr = [
    { name: 'Lydia', age: 7 },
    { name: 'Anne', age: 34 },
    { name: 'Holger', age: 59 },
  ];

  arr.sort((item1, item2) => {
    if (item1.name < item2.name) {
      return -1;
    }
    if (item1.name > item2.name) {
      return 1;
    }
    return 0;
  });
  // => [ { name: 'Anne', age: 34 }, { name: 'Holger', age: 59 },
  // { name: 'Lydia', age: 7 } ]
  
  # Instructions
  Elyse, magician-to-be, continues her training. She will be given a deck of cards and attempt to transform that deck. 
  She will make certain cards appear, disappear, change their values, or completely rearrange themselves. 
  To make things easier, she usually only starts with cards numbered 1 to 10, although some of the tricks may result in larger cards being created.

  1. Double every single card
  Elyse wants to double the number of every card in the deck. This may result in higher cards than 1-10.

  const deck = [1, 2, 3, 4, 10];
  seeingDouble(deck);
  // => [2, 4, 6, 8, 20]
  
  2. Create multiple copies of every 3 found in the deck
  Elyse wants to triplicate every 3 found in the deck. If a deck started with a single 3, after the trick the deck would have three 3's in place of the original.

  const deck = [1, 3, 9, 3, 7];
  threeOfEachThree(deck);
  // => [1, 3, 3, 3, 9, 3, 3, 3, 7]
  
  3. Find two cards from the exact middle of the deck
  Elyse will take a deck of ten cards, and make every card disappear except the middle two cards.

  const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  middleTwo(deck);
  // => [5, 6]
  
  4. The outside two cards will reappear in the middle of the deck
  Elyse wants to move the top and bottom cards of the deck into the middle, in reverse order.

  You can assume that the deck has an even number of cards.

  const deck = [1, 2, 3, 5, 6, 10];
  sandwichTrick(deck);
  // => [2, 3, 10, 1, 5, 6]
  
  5. Every card that isn't 2 disappears
  Elyse's favorite number today is 2. In this trick, every card that isn't a 2 will disappear from the deck.

  const deck = [1, 2, 3, 4, 10, 2];
  twoIsSpecial(deck);
  // => [2, 2]
  
  6. Convert a shuffled deck into a perfectly ordered deck
  Elyse wishes to demonstrate her mastery of reordering the cards perfectly - no matter how well shuffled.

  const deck = [10, 1, 5, 3, 2, 8, 7];
  perfectlyOrdered(deck);
  // => [1, 2, 3, 5, 7, 8, 10]
  
  7. Reorder the deck
  Elyse wants to change the order of the cards in the deck. After the trick, the card that is currently at the top should end up at the bottom of the deck. 
  The second card should end up second last etc.

  const deck = [10, 1, 5, 3, 2];
  reorder(deck);
  // => [2, 3, 5, 1, 10]
  
  12-April-2023
*/


/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  return deck.map((card) => card * 2)
}
/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  return deck.flatMap((card) => card === 3 ? [card, card, card] : [card])
  
  // Instructions hint at reduce, which is more convulted in this case.
  //
  // flatMap is a recent addition to the array method belt, and is the same
  // as a .map() followed by .flat() with a depth of 1.
  //
  return deck.reduce((result, card) => {
    if (card === 3) {
      result.push(card, card, card)
    } else {
      result.push(card)
    }
    return result
  }, [])
}
/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  const middle = deck.length / 2
  return deck.slice(middle - 1, middle + 1)
}
/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */
export function sandwichTrick(deck) {
  const first = deck.shift();
  const last = deck.pop();
  
  deck.splice(deck.length / 2, 0, last, first)
  return deck
}
/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  return deck.filter((card) => card === 2)
}
/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  return deck.sort((a, b) => a - b)
}
/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  return deck.reverse();
}
