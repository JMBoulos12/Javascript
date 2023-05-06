



/**
  #Instructions
  Implement encoding and decoding for the rail fence cipher.

  The Rail Fence cipher is a form of transposition cipher that gets its name from the way in which it's encoded. It was already used by the ancient Greeks.

  In the Rail Fence cipher, the message is written downwards on successive "rails" of an imaginary fence, 
  then moving up when we get to the bottom (like a zig-zag). Finally the message is then read off in rows.

  For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT ONCE", the cipherer writes out:
  W . . . E . . . C . . . R . . . L . . . T . . . E
  . E . R . D . S . O . E . E . F . E . A . O . C .
  . . A . . . I . . . V . . . D . . . E . . . N . .
  
  Then reads off:
  WECRLTEERDSOEEFEAOCAIVDEN
  
  To decrypt a message you take the zig-zag shape and fill the ciphertext along the rows.
  ? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
  . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
  . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
  
  The first row has seven spots that can be filled with "WECRLTE".
  W . . . E . . . C . . . R . . . L . . . T . . . E
  . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
  . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
  
  Now the 2nd row takes "ERDSOEEFEAOC".
  W . . . E . . . C . . . R . . . L . . . T . . . E
  . E . R . D . S . O . E . E . F . E . A . O . C .
  . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
  
  Leaving "AIVDEN" for the last row.
  W . . . E . . . C . . . R . . . L . . . T . . . E
  . E . R . D . S . O . E . E . F . E . A . O . C .
  . . A . . . I . . . V . . . D . . . E . . . N . .
  
  If you now read along the zig-zag shape you can read the original message. 
   
  06-May-2023
*/


const railCycle = (n) => {
  let rail = 0;
  let dir = +1;
  return function() {
    const retVal = rail;
    if ((rail === 0 && dir === -1) || (rail === n-1 && dir === +1)) {
      dir *= -1;
    }
    rail += dir;
    return retVal;
  }
}
/* ********************************************************* */
export const encode = (phrase, numRails) => {
  const nextRail = railCycle(numRails);
  const rails = new Array(numRails).fill('');
  phrase.split("").forEach((c) => rails[nextRail()] += c);
  return rails.join("");
};
/* ********************************************************* */
export const decode = (phrase, numRails) => {
  // 1. determine the length of each rail
  const railLengths = new Array(numRails).fill(0);
  const cycleLength = 2 * (numRails - 1);
  const numCycles = Math.floor(phrase.length / cycleLength);
  for (let r = 0; r < numRails; r++) {
    railLengths[r] = numCycles;
    // "inner" rails consume 2 chars for each cycle
    if (1 <= r && r < numRails - 1) railLengths[r] *= 2;
  }
  let nextRail = railCycle(numRails);
  for (let i = cycleLength * numCycles; i < phrase.length; i++) {
    railLengths[nextRail()] += 1;
  }
  // 2. determine where in the string each rail starts
  const railStart = new Array(numRails).fill(0);
  for (let r = 1; r < numRails; r++) {
    railStart[r] = railStart[r-1] + railLengths[r-1];
  }
  // 3. run the rails to extract the plaintext
  nextRail = railCycle(numRails);
  const railIdx = new Array(numRails).fill(0);
  const decoded = [];
  for (let i = 0; i < phrase.length; i++) {
    const r = nextRail()
    decoded.push(phrase[railStart[r] + railIdx[r]]);
    railIdx[r] += 1;
  }
  return decoded.join("");
};
