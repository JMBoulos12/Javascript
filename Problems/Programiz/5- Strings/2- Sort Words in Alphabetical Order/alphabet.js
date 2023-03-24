



/*
  Output  :
  Enter a sentence: I am learning JavaScript
  The sorted words are:
  I
  JavaScript
  am
  learning
  
  In the above example, the user is prompted to enter a sentence.

  * The sentence is divided into array elements (individual words) using the split(' ') method. The split(' ') method splits the string at whitespaces.
  * The elements of an array are sorted using the sort() method. The sort() method sorts the strings in alphabetical and ascending order.
  * The for...of loop is used to iterate over the array elements and display them.
    Here, we are sorting alphabetically. So, the expected output is am, I, JavaScript, and learning. However, am is printed after I and JavaScript.

  Why I and JavaScript are printed before am?

  This is because I and J of JavaScript are in uppercase. And, when we use the sort() method, uppercase letters are placed before lowercase.

  We can verify this by providing only lowercase input.

    // program to sort words in alphabetical order

  // take input
  const string = prompt('Enter a sentence: ');

  // converting to an array
  const words = string.split(' ');

  // sort the array elements
  words.sort();

  // display the sorted words
  console.log('The sorted words are:');

  for (const element of words) {
    console.log(element);
  }
  
  Output  :
  Enter a sentence: i am learning javascript
  The sorted words are:
  am
  i
  javascript
  learning
  
  Here, we get the expected output now.

  Note: Instead of displaying from the array values, you can also convert the array elements back to the string and display the values as a string using join() method.

        words.join(' '); // I JavaScript am learning
  
  24-March-2023
*/

// program to sort words in alphabetical order

// take input
const string = prompt('Enter a sentence: ');

// converting to an array
const words = string.split(' ');

// sort the array elements
words.sort();

// display the sorted words
console.log('The sorted words are:');

for (const element of words) {
  console.log(element);
}
