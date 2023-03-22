



/*
  Output  :
  true
  
  The set subset operation returns true if all the elements of setB are in setA.

  The for...of loop is used to loop through the elements of setB. If any element that is present is setB is not present in setA, false is returned.

  22-March-2023
*/


// perform subset operation
// true if all elements of set b is in set a
function subset(setA, setB) {
    for (let i of setB) {
        if (!setA.has(i)) {
            return false
        }
    }
    return true
}

// two sets of fruits
const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['apple', 'orange']);

const result = subset(setA, setB);

console.log(result);
