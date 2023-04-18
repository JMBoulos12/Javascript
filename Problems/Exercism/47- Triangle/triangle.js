



/**
  #Instructions
  Determine if a triangle is equilateral, isosceles, or scalene.

  An equilateral triangle has all three sides the same length.

  An isosceles triangle has at least two sides the same length. 
  (It is sometimes specified as having exactly two sides the same length, but for the purposes of this exercise we'll say at least two.)

  A scalene triangle has all sides of different lengths.

  #Note
  For a shape to be a triangle at all, all sides have to be of length > 0, and the sum of the lengths of any two sides must be greater 
  than or equal to the length of the third side. See Triangle Inequality.

  #Dig Deeper
  The case where the sum of the lengths of two sides equals that of the third is known as a degenerate triangle - it has zero area and looks like a single line. 
  Feel free to add your own code/tests to check for degenerate triangles.
  
  18-April-2023
*/


const isFiniteNumber = n => typeof n === 'number' && isFinite(n);
const isPositiveNumber = n => isFiniteNumber(n) && n > 0;
export class Triangle {
  static verifyTriangle(sides) {
    const [side1, side2, side3] = sides.sort((a, b) => a - b);
    return sides.length === 3 &&
      sides.every(isPositiveNumber) &&
      side1 + side2 >= side3;
  }
  #sides;
  #isEquilateral = false;
  #isIsosceles = false;
  #isScalene = false;
  constructor(...sides) {
    this.#sides = sides;
    if (Triangle.verifyTriangle(sides)) {
      const uniqueSides = new Set(sides);
      this.#isEquilateral = uniqueSides.size === 1;
      this.#isIsosceles = uniqueSides.size <= 2;
      this.#isScalene = uniqueSides.size === 3;
    }
  }
  get sides() {
    return this.#sides;
  }
  get isEquilateral() {
    return this.#isEquilateral;
  }
  get isIsosceles() {
    return this.#isIsosceles;
  }
  get isScalene() {
    return this.#isScalene;
  }
}
