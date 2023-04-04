



/*
  # Instructions  :
  You are an avid bird watcher that keeps track of how many birds have visited your garden. 
  Usually, you use a tally in a notebook to count the birds but you want to better work with your data. 
  You already digitalized the bird counts per day for the past weeks that you kept in the notebook.

  Now you want to determine the total number of birds that you counted, calculate the bird count for a specific week and correct a counting mistake.

  # Note  :
  To practice, use a for loop to solve each of the tasks below.

  1. Determine the total number of birds that you counted so far
  Let us start analyzing the data by getting a high-level view. 
  Find out how many birds you counted in total since you started your logs.

  Implement a function totalBirdCount that accepts an array that contains the bird count per day. 
  It should return the total number of birds that you counted.

  birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
  totalBirdCount(birdsPerDay);
  // => 34
  
  2. Calculate the number of visiting birds in a specific week
  Now that you got a general feel for your bird count numbers, you want to make a more fine-grained analysis.

  Implement a function birdsInWeek that accepts an array of bird counts per day and a week number. 
  It returns the total number of birds that you counted in that specific week. You can assume weeks are always tracked completely.

  birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
  birdsInWeek(birdsPerDay, 2);
  // => 12
  
  3. Fix a counting mistake
  You realized that all the time you were trying to keep track of the birds, there was one hiding in a far corner of the garden. 
  You figured out that this bird always spent every second day in your garden. 
  You do not know exactly where it was in between those days but definitely not in your garden. 
  Your bird watcher intuition also tells you that the bird was in your garden on the first day that you tracked in your list.

  Given this new information, write a function fixBirdCountLog that takes an array of birds counted per day as an argument. 
  It should correct the counting mistake and return the modified array.

  birdsPerDay = [2, 5, 0, 7, 4, 1];
  fixBirdCountLog(birdsPerDay);
  // => [3, 5, 1, 7, 5, 1]
  
  31-March-2023
*/


// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.
/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  // return birdsPerDay.reduce((result, dayCount) => result + dayCount, 0);
  const days = birdsPerDay.length;
  
  let count = 0;
  
  for (let i = 0; i < days; i++) {
    count += birdsPerDay[i];
  }
  return count;
}
/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  // return totalBirdCount(birdsPerDay.slice((week - 1) * 7, week * 7)); 
  const startDay = (week - 1) * 7;
  const endDay = startDay + 7;
  
  let count = 0;
  
  for (let i = startDay; i < endDay; i++) {
    count += birdsPerDay[i];
  }
  return count;
}
/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  // birdsPerDay.map((day, index) => index % 2 === 0 ? day : day + 1)
  const days = birdsPerDay.length;
    
  for (let i = 0; i < days; i += 2) {
    birdsPerDay[i] += 1
  }
  return birdsPerDay;
}
