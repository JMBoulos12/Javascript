



/*
  In this example, you will learn to write a JavaScript program that will generate a range of numbers and characters by passing the upper and lower bounds.
  
  Output  :
  [1, 2, 3, 4, 5]
  ["A", "B", "C", "D", "E", "F", "G"]
  
  In this program, a range of numbers and characters is generated between the upper and the lower bounds.

  * The iterate generator function is used to iterate through lower and upper bounds.
  * The spread syntax ... is then used to include all the elements returned by the iterate function.
  * The charCodeAt() method takes in an index value and returns an integer representing its UTF-16 (16-bit Unicode Transformation Format) code.
  * The map() method iterates through all the array elements.
  * The fromCharCode() method converts Unicode values into characters.

  27-March-2023
*/


// program to generate range of numbers and characters
function* iterate(a, b) {
  for (let i = a; i <= b; i += 1) {
    yield i
  }
}

function range(a, b) {
    if(typeof a === 'string') {
        let result = [...iterate(a.charCodeAt(), b.charCodeAt())].map(n => String.fromCharCode(n));
        console.log(result);
    }
    else {
        let result = [...iterate(a, b)];
        console.log(result);
    }
}

range(1, 5);
range('A', 'G');
