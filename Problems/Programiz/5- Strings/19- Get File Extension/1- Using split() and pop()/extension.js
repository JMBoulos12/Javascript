



/*
  In this example, you will learn to write a JavaScript program that will get the file extension of a given filename.
  
  Output  :
  js
  txt
  
  In this program, the extension of the filename is extracted using the split() method and the pop() method.

  * The filename is split into individual array elements using the split() method.
    Here, filename.split('.') gives ["module", "js"] by splitting the string.
  * The last array element, which is the extension, is returned using the pop() method.

  27-March-2023
*/


// program to get the file extension

function getFileExtension(filename){

    // get file extension
    const extension = filename.split('.').pop();
    return extension;
}

// passing the filename
const result1 = getFileExtension('module.js');
console.log(result1);

const result2 = getFileExtension('module.txt');
console.log(result2);
