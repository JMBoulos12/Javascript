



/**
  #Instructions
  Implement variable length quantity encoding and decoding.

  The goal of this exercise is to implement VLQ encoding/decoding.

  In short, the goal of this encoding is to encode integer values in a way that would save bytes. 
  Only the first 7 bits of each byte is significant (right-justified; sort of like an ASCII byte). 
  So, if you have a 32-bit value, you have to unpack it into a series of 7-bit bytes. Of course, 
  you will have a variable number of bytes depending upon your integer. 
  To indicate which is the last byte of the series, you leave bit #7 clear. In all of the preceding bytes, you set bit #7.

  So, if an integer is between 0-127, it can be represented as one byte. 
  Although VLQ can deal with numbers of arbitrary sizes, for this exercise we will restrict ourselves to only numbers that fit in a 32-bit unsigned integer. 
  Here are examples of integers as 32-bit values, and the variable length quantities that they translate to:

   NUMBER        VARIABLE QUANTITY
  00000000              00
  00000040              40
  0000007F              7F
  00000080             81 00
  00002000             C0 00
  00003FFF             FF 7F
  00004000           81 80 00
  00100000           C0 80 00
  001FFFFF           FF FF 7F
  00200000          81 80 80 00
  08000000          C0 80 80 00
  0FFFFFFF          FF FF FF 7F
  
  02-May-2023
*/


export const encode = (/** @type {number[]} */ arr) => {
    let out = [];
    arr.forEach(n => {
        let bits = n.toString(2);
        let spaced = bits.split("").map((v, i) => (bits.length - i) % 7 === 0 ? " " + v : v).join("").trim().split(" ");
        let vlq = spaced.map((e, i) => i === spaced.length - 1 ? parseInt(e, 2) : parseInt(e, 2) | 0b10000000);
        out = [...out, ...vlq];
    });
    return out;
};
export const decode = (/** @type {number[]} */ arr) => {
    let out = [];
    if ((arr[arr.length - 1] & 0b10000000) === 128) { throw new Error("Incomplete sequence"); }
    let sections = arr.map(n => (n & 0b10000000) === 128 ? (n & 0b01111111).toString(2).padStart(7, "0") : (n & 0b01111111).toString(2).padStart(7, "0") + " ").join("").trim().split(" ");
    let nums = sections.map(n => parseInt(n, 2));
    out = [...out, ...nums];
    return out;
};
