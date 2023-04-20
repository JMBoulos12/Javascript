



/**
  #Instructions
  A Pythagorean triplet is a set of three natural numbers, {a, b, c}, for which,
  a**2 + b**2 = c**2
  
  and such that,
  a < b < c
  
  For example,
  3**2 + 4**2 = 9 + 16 = 25 = 5**2.
  
  Given an input integer N, find all Pythagorean triplets for which a + b + c = N.

  For example, with N = 1000, there is exactly one Pythagorean triplet for which a + b + c = 1000: {200, 375, 425}.

  By default, only sum is given to the triplets function, but it may optionally also receive minFactor and/or maxFactor. When these are given, make sure each factor of the triplet is at least minFactor and at most maxFactor.
  
  20-April-2023
*/


export function triplets({ minFactor, maxFactor, sum }) {
  
  if (minFactor === undefined) minFactor = 2;
  if (maxFactor === undefined) maxFactor = sum;
  
  let triplets = [];
    for (let b=minFactor; b<=maxFactor; b++){
      for (let c=b-1; c<=maxFactor; c++){
        let a = sum - b - c;
        if (a<0 || a>b || a>c || a<minFactor || a>maxFactor) continue;
        if (a === 26) console.log (b + " " + c);
        if ( (Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2)) ){
          let currentTriplet = new Triplet(a,b,c);
          triplets.unshift(currentTriplet);
        }        
      }
    }
  return triplets;
}
class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  toArray() {
    return [this.a,this.b,this.c];
  }
}
