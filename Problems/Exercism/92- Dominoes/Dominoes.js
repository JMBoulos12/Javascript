



/**
  #Instructions
  Make a chain of dominoes.

  Compute a way to order a given set of dominoes in such a way that they form a correct domino chain 
  (the dots on one half of a stone match the dots on the neighbouring half of an adjacent stone) 
  and that dots on the halves of the stones which don't have a neighbour (the first and last stone) match each other.

  For example given the stones [2|1], [2|3] and [1|3] you should compute something like [1|2] [2|3] [3|1] or [3|2] [2|1] [1|3] or [1|3] [3|2] [2|1] etc, 
  where the first and last numbers are the same.

  For stones [1|2], [4|1] and [2|3] the resulting chain is not valid: [4|1] [1|2] [2|3]'s first and last numbers are not the same. 4 != 3

  Some test cases may use duplicate stones in a chain solution, assume that multiple Domino sets are being used. 
   
  01-May-2023
*/


//
// This is only a SKELETON file for the 'Dominoes' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
let dominoesArr = []
export const chain = (dominoes) => {
  dominoesArr = []
  const singleton = d => d.length == 1
  const dominoesTLength = dominoes.length;
  if(dominoes.length == 0){
    return []
  } else if(singleton(dominoes)){
    if(dominoes[0][0] == dominoes[0][1]) {
      return dominoes
    } else {
      return null
    }
  } else {
    for(let i = 0; i < dominoes.length; i++){
      let arr = [].concat(dominoes)
      arr.splice(i,1)
      buildDominoes([dominoes[i]], arr, dominoesTLength)
    }
  }
  if(dominoesArr.length == 0){
    return null
  } else if(dominoesArr.length > 0){
    let reformedArr = []
    dominoesArr.forEach(e => {
     e[0][0] == e[e.length - 1][1] ? checkAdjacent(e) ? reformedArr.push(e) : null : null
    })
    return reformedArr[0]
  }
  return dominoesArr
};
function buildDominoes (building, leftover, l) {
  let lastPiece = building[building.length - 1][1]
  if(building.length == l && building[0][0] == building[building.length - 1][1]){
    dominoesArr.push(building)
    return
  } 
  for(let i = 0; i < leftover.length; i++){
    let b = [].concat(building)
    let r = [].concat(building)
    if(leftover[i][0] == lastPiece){
      let arr = [].concat(leftover)
      b.push(leftover[i])
      arr.splice(i,1)
      buildDominoes(b, arr, l)
    } 
    if(leftover[i][1] == lastPiece){ // reversed
      let arr = [].concat(leftover)
      r.push(leftover[i].reverse())
      arr.splice(i,1)
      buildDominoes(r, arr, l)
    }
  }
}
function checkAdjacent(arr){
  let isTrue = true
  for(let i = 0; i < arr.length; i++){
    if(arr[i + 1]){
      if(arr[i][1] !== arr[i + 1][0]){
        isTrue = false
      }
    }
  }
  return isTrue
}
