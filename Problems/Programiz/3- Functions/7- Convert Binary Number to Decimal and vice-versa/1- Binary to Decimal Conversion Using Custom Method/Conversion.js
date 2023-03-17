



/*
  Binary numbers are numbers consisting only of 2 digits: 0 and 1. They can be expressed in the base 2 numeral system. For example,

  10 (2), 1000 (8), 11001 (25)
  Decimal numbers are numbers consisting of 10 digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. They can be expressed in the base 10 numeral system.

  18, 222, 987
  Here, we will be writing a Java program that will convert a binary number into decimal and vice versa using built-in methods and custom methods.
  
  Output  :
  110110111 in binary = 439 in decimal
  
  Here's how the above program works:

  17-March-2023
*/


class Main {
    
  public static void main(String[] args) {

    // binary number
    long num = 110110111;

    // call method by passing the binary number
    int decimal = convertBinaryToDecimal(num);

    System.out.println("Binary to Decimal");
    System.out.println(num + " = " + decimal);
  }

  public static int convertBinaryToDecimal(long num) {
    int decimalNumber = 0, i = 0;
    long remainder;
    
    while (num != 0) {
      remainder = num % 10;
      num /= 10;
      decimalNumber += remainder * Math.pow(2, i);
      ++i;
    }
    
    return decimalNumber;
  }
}
