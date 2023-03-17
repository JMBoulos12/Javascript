



/*
  Output  :
  Enter an integer: 7
  Enter a range: 5
  7 * 1 = 7
  7 * 2 = 14
  7 * 3 = 21
  7 * 4 = 28
  7 * 5 = 35
  
  In this example, the user is prompted to enter an integer and also a range for which they want to create a multiplication table.

  The user enters an integer (here 7) and a range (here 5). Then a multiplication table is created using a for loop for that range.

  17-March-2023
*/


/* program to generate a multiplication table
upto a range */

// take number input from the user
const number = parseInt(prompt('Enter an integer: '));

// take range input from the user
const range = parseInt(prompt('Enter a range: '));

//creating a multiplication table
for(let i = 1; i <= range; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}
