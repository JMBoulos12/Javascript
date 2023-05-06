



/**
  #Instructions
  In this exercise, let's try to solve a classic problem.

  Bob is a thief. After months of careful planning, he finally manages to crack the security systems of a high-class apartment.

  In front of him are many items, each with a value (v) and weight (w). Bob, of course, wants to maximize the total value he can get; 
  he would gladly take all of the items if he could. However, to his horror, he realizes that the knapsack he carries with him can only hold so much weight (W).

  Given a knapsack with a specific carrying capacity (W), help Bob determine the maximum value he can get from the items in the house. 
  Note that Bob can take only one of each item.

  All values given will be strictly positive. 
  Items will be represented as a list of pairs, wi and vi, where the first element wi is the weight of the ith item and vi is the value for that item.

  For example:

  Items: [ { "weight": 5, "value": 10 }, { "weight": 4, "value": 40 }, { "weight": 6, "value": 30 }, { "weight": 4, "value": 50 } ]

  Knapsack Limit: 10

  For the above, the first item has weight 5 and value 10, the second item has weight 4 and value 40, and so on.

  In this example, Bob should take the second and fourth item to maximize his value, which, in this case, is 90. 
  He cannot get more than 90 as his knapsack has a weight limit of 10. 
   
  06-May-2023
*/


/*
 * Translating the pseudocode from https://en.wikipedia.org/wiki/Knapsack_problem
 *
 *  Assume w_{1}, w_{2}, ..., w_{n}, W are strictly positive integers. 
 *  Define m[i,w] to be the maximum value that can be attained with weight
 *  less than or equal to w using items up to i (first i items).
 * 
 *  We can define m[i,w] recursively as follows: 
 *  * m[0,w] = 0
 *  * m[i,w] = m[i-1,w] if w_{i} > w (the new item is more than the current weight limit)
 *  * m[i,w] = max(m[i-1,w], m[i-1,w-w_{i}]+v_{i}) if w_{i} <= w.
 *
 * The solution can then be found by calculating m[n,W]. 
 */
export const knapsack = (maximumWeight, items) => {
  const n = items.length;
  const m = [];
  m[0] = Array(maximumWeight+1).fill(0);
  for (let i = 1; i <= n; i++) {
    m[i] = Array(maximumWeight+1);
    let item = items[i-1];
    let wi = item.weight;
    let vi = item.value;
    for (let w = 0; w <= maximumWeight; w++) {
      m[i][w] = wi > w
                  ? m[i-1][w]
                  : Math.max(m[i-1][w], vi + m[i-1][w-wi]);
    }
  }
  return m[n][maximumWeight];
};
