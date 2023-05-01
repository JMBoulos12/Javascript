



/**
  #Introduction
  You have stumbled upon a group of mathematicians who are also singer-songwriters. They have written a song for each of their favorite numbers, and, as you can imagine, they have a lot of favorite numbers (like 0 or 73 or 6174).

  You are curious to hear the song for your favorite number, but with so many songs to wade through, finding the right song could take a while. Fortunately, they have organized their songs in a playlist sorted by the title — which is simply the number that the song is about.

  You realize that you can use a binary search algorithm to quickly find a song given the title.

  #Instructions
  Your task is to implement a binary search algorithm.

  A binary search algorithm finds an item in a list by repeatedly splitting it in half, only keeping the half which contains the item we're looking for. It allows us to quickly narrow down the possible locations of our item until we find it, or until we've eliminated all possible locations.

  ##Caution##
  Binary search only works when a list has been sorted.

  The algorithm looks like this:

  * Find the middle element of a sorted list and compare it with the item we're looking for.
  * If the middle element is our item, then we're done!
  * If the middle element is greater than our item, we can eliminate that element and all the elements after it.
  * If the middle element is less than our item, we can eliminate that element and all the elements before it.
  * If every element of the list has been eliminated then the item is not in the list.
  * Otherwise, repeat the process on the part of the list that has not been eliminated.
  
  Here's an example:

  Let's say we're looking for the number 23 in the following sorted list: [4, 8, 12, 16, 23, 28, 32].

  * We start by comparing 23 with the middle element, 16.
  * Since 23 is greater than 16, we can eliminate the left half of the list, leaving us with [23, 28, 32].
  * We then compare 23 with the new middle element, 28.
  * Since 23 is less than 28, we can eliminate the right half of the list: [23].
  * We've found our item. 
   
  01-May-2023
*/


/**
 * When recursing the right side of an array, be sure to add the midpoint to offset the change in indeces.
 */
export const find = (array, value) => {
  if (!array.length) throw new Error('Value not in array');
  const midpoint = array.length / 2 | 0;
  if (array[midpoint] > value) return find(array.slice(0, midpoint), value);
  if (array[midpoint] < value) return find(array.slice(midpoint + 1), value) + midpoint + 1;
  return midpoint;
};
