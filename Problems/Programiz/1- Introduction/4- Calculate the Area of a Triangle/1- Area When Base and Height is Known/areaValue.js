



/*
  If you know the base and height of a triangle, you can find the area using the formula:
  area = (base * height) / 2
  
  Output  :
  Enter the base of a triangle: 4
  Enter the height of a triangle: 6
  The area of the triangle is 12
  
  If you know all the sides of a triangle, you can find the area using Herons' formula. If a, b and c are the three sides of a triangle, then
  s = (a+b+c)/2
  area = √(s(s-a)*(s-b)*(s-c))

  17-March-2023
*/


const baseValue = prompt('Enter the base of a triangle: ');
const heightValue = prompt('Enter the height of a triangle: ');

// calculate the area
const areaValue = (baseValue * heightValue) / 2;

console.log(
  `The area of the triangle is ${areaValue}`
);
