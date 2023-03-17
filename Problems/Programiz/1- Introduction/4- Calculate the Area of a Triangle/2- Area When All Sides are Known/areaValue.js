



/*
  Output  :
  Enter side1: 3
  Enter side2: 4
  Enter side3: 5
  The area of the triangle is 6
  
  Here, we have used the Math.sqrt() method to find the square root of a number.

  Note: If a triangle cannot be formed from the given sides, the program will not run correctly.

  17-March-2023
*/


// JavaScript program to find the area of a triangle

const side1 = parseInt(prompt('Enter side1: '));
const side2 = parseInt(prompt('Enter side2: '));
const side3 = parseInt(prompt('Enter side3: '));

// calculate the semi-perimeter
const s = (side1 + side2 + side3) / 2;

//calculate the area
const areaValue = Math.sqrt(
  s * (s - side1) * (s - side2) * (s - side3)
);

console.log(
  `The area of the triangle is ${areaValue}`
);
