



/*
  In this program, we will first convert binary number to decimal. Then, the decimal number is converted to octal.
  
  Output  :
  101001 in binary = 51 in octal
  
  This conversion takes place as:

  Binary To Decimal
  1 * 25 + 0 * 24 + 1 * 23 + 0 * 22 + 0 * 21 + 1 * 20 = 41

  Decimal to Octal
  8 | 41
  8 | 5 -- 1
  8 | 0 -- 5
  (51)
  
  17-March-2023
*/


class Main {
  public static void main(String[] args) {
    long binary = 101001;
    int octal = convertBinarytoOctal(binary);
    System.out.println(binary + " in binary = " + octal + " in octal");
  }

  public static int convertBinarytoOctal(long binaryNumber) {
    int octalNumber = 0, decimalNumber = 0, i = 0;

    while (binaryNumber != 0) {
      decimalNumber += (binaryNumber % 10) * Math.pow(2, i);
      ++i;
      binaryNumber /= 10;
    }

    i = 1;

    while (decimalNumber != 0) {
      octalNumber += (decimalNumber % 8) * i;
      decimalNumber /= 8;
      i *= 10;
    }

    return octalNumber;
  }
}
