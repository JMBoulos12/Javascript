



/*
  Write a JavaScript program that will illustrate different set operations.
  
  Output  :
  Set {"apple", "mango", "orange", "grapes", "banana"}
  
  The set union operation combines elements of both sets into one.

  A new set unionSet is created using new Set(). The unionSet variable contains all the values of setA. 
  Then, the for...of loop is used to iterate through all the elements of setB and add them to unionSet using the add() method.

  The set does not contain duplicate values. Hence, if the set contains the same value, the latter value is discarded.

  22-March-2023
*/


// perform union operation
// contain elements of both sets
function union(a, b) {
    let unionSet = new Set(a);
    for (let i of b) {
        unionSet.add(i);
    }
    return unionSet
}

// two sets of fruits
const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['grapes', 'apple', 'banana']);

const result = union(setA, setB);

console.log(result);
