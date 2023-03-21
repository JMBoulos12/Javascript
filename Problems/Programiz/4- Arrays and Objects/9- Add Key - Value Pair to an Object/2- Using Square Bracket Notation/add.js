



/*
  Output  :

  {
      name: "Monica",
      age: 22,
      gender: "female",
      height: 5.4
      
  }
  In this example, we add the new property height to the person object using the square bracket notation [] i.e. person['height'] = 5.4;.

  21-March-2023
*/


// program to add a key/value pair to an object

const person = {
    name: 'Monica',
    age: 22,
    gender: 'female'
}

// add a key/value pair
person['height'] = 5.4;

console.log(person);
