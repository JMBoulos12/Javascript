



/*
  Even numbers are those numbers that are exactly divisible by 2.

  The remainder operator % gives the remainder when used with a number. For example,
  const number = 6;
  const result = number % 4; // 2 
  
  Hence, when % is used with 2, the number is even if the remainder is zero. Otherwise, the number is odd.
  
  Output  :
  Enter a number: 27
  The number is odd.
  
  In this program, number % 2 == 0 checks whether the number is even. If the remainder is 0, the number is even.

  In this case, 27 % 2 equals to 1. Hence, the number is odd.

  17-March-2023
*/


// program to check if the number is even or odd
// take input from the user
const number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}
