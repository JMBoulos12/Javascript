



/*
  In this example, you will learn to write a JavaScript program that will sort an array of objects by property values.
  
  Output  :

  [{name: "Jack", age: 25},
  {name: "John", age: 24},
  {name: "Sara", age: 24}]
  
  In the above program, the sort() method is used to sort an array by the name property of its object elements.

  The sort() method sorts its elements according to the values returned by a custom sort function (compareName in this case).

  Here,

  * The property names are changed to uppercase using the toUpperCase() method.
  * If comparing two names results in 1, then their order is changed.
  * If comparing two names results in -1 or 0, then their order is left as is.

  22-March-2023
*/


// program to sort array by property name

function compareName(a, b) {

    // converting to uppercase to have case-insensitive comparison
    const name1 = a.name.toUpperCase();
    const name2 = b.name.toUpperCase();

    let comparison = 0;

    if (name1 > name2) {
        comparison = 1;
    } else if (name1 < name2) {
        comparison = -1;
    }
    return comparison;
}

const students = [{name: 'Sara', age:24},{name: 'John', age:24}, {name: 'Jack', age:25}];

console.log(students.sort(compareName));
