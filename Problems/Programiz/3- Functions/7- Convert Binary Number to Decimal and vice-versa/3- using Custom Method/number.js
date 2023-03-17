



/*
  Decimal to Binary                                                                                                                                                                    
  Step 1: 19/2                                                                                                                                                                         
  Quotient = 9, Remainder = 1                                                                                                                                                          
  Step 2: 9/2                                                                                                                                                                          
  Quotient = 4, Remainder = 1                                                                                                                                                          
  Step 3: 4/2                                                                                                                                                                          
  Quotient = 2, Remainder = 0                                                                                                                                                          
  Step 4: 2/2                                                                                                                                                                          
  Quotient = 1, Remainder = 0                                                                                                                                                          
  Step 5: 1/2                                                                                                                                                                          
  Quotient = 0, Remainder = 1                                                                                                                                                          
  
  19 = 10011
  
  17-March-2023
*/


class Main {

  public static void main(String[] args) {

    // decimal number
    int num = 19;
    System.out.println("Decimal to Binary");

    // call method to convert to binary
    long binary = convertDecimalToBinary(num);

    System.out.println("\n" + num + " = " + binary);
    }

  public static long convertDecimalToBinary(int n) {

    long binaryNumber = 0;
    int remainder, i = 1, step = 1;

    while (n!=0) {
      remainder = n % 2;
        System.out.println("Step " + step++ + ": " + n + "/2");

        System.out.println("Quotient = " + n/2 + ", Remainder = " + remainder);
        n /= 2;

        binaryNumber += remainder * i;
        i *= 10;
    }
    
    return binaryNumber;
    }
}
