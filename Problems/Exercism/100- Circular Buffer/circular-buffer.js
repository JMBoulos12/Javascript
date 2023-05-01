



/**
  #Instructions
  A circular buffer, cyclic buffer or ring buffer is a data structure that uses a single, fixed-size buffer as if it were connected end-to-end.

  A circular buffer first starts empty and of some predefined length. For example, this is a 7-element buffer:
  [ ][ ][ ][ ][ ][ ][ ]
  
  Assume that a 1 is written into the middle of the buffer (exact starting location does not matter in a circular buffer):
  [ ][ ][ ][1][ ][ ][ ]
  
  Then assume that two more elements are added — 2 & 3 — which get appended after the 1:
  [ ][ ][ ][1][2][3][ ]
  
  If two elements are then removed from the buffer, the oldest values inside the buffer are removed. 
  The two elements removed, in this case, are 1 & 2, leaving the buffer with just a 3:
  [ ][ ][ ][ ][ ][3][ ]
  
  If the buffer has 7 elements then it is completely full:
  [5][6][7][8][9][3][4]
  
  When the buffer is full an error will be raised, alerting the client that further writes are blocked until a slot becomes free.

  When the buffer is full, the client can opt to overwrite the oldest data with a forced write. 
  In this case, two more elements — A & B — are added and they overwrite the 3 & 4:
  [5][6][7][8][9][A][B]
  
  3 & 4 have been replaced by A & B making 5 now the oldest data in the buffer. 
  Finally, if two elements are removed then what would be returned is 5 & 6 yielding the buffer:
  [ ][ ][7][8][9][A][B]
  
  Because there is space available, if the client again uses overwrite to store C & D 
  then the space where 5 & 6 were stored previously will be used not the location of 7 & 8. 7 is still the oldest element and the buffer is once again full.
  [C][D][7][8][9][A][B] 
   
  01-May-2023
*/


class BufferFullError extends Error {}
class BufferEmptyError extends Error {}
class CircularBuffer {
  constructor(size) {
    this.buffer = [];
    this.size = size;
  }
  read() {
    if (this.isEmpty()) {
      throw new BufferEmptyError();
    }
    return this.buffer.shift();
  }
  write(val, force = false) {
    if (!this.isValidVal(val)) {
      return;
    }
    if (this.isFull() && !force) {
      throw new BufferFullError();
    }
    if (force) {
      this.buffer.shift();
    }
    this.buffer.push(val);
  }
  forceWrite(val) {
    try {
      this.write(val);
    } catch (e) {
      this.write(val, true);
    }
  }
  clear() {
    this.buffer = [];
  }
  isEmpty() {
    return this.buffer.length === 0;
  }
  isFull() {
    return this.buffer.length === this.size;
  }
  isValidVal(val) {
    return val !== undefined && val !== null;
  }
}
function circularBuffer(n) {
  return new CircularBuffer(n);
}
export {
  circularBuffer as default,
  BufferFullError,
  BufferEmptyError,
};
