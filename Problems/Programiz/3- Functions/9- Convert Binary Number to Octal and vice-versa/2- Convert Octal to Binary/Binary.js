



/*
  In this program, the octal number to decimal to decimal at first. Then, the decimal number is converted to binary number.
  
  Output  :
  67 in octal = 110111 in binary
  
  This conversion takes place as:

  Octal To Decimal
  6 * 81 + 7 * 80 = 55

  Decimal to Binary
  2 | 55
  2 | 27 -- 1
  2 | 13 -- 1
  2 | 6  -- 1
  2 | 3  -- 0
  2 | 1  -- 1
  2 | 0  -- 1
  (110111)

  17-March-2023
*/


class Main {
  public static void main(String[] args) {
    int octal = 67;
    long binary = convertOctalToBinary(octal);
    System.out.println(octal + " in octal = " + binary + " in binary");
  }

  public static long convertOctalToBinary(int octalNumber) {
    int decimalNumber = 0, i = 0;
    long binaryNumber = 0;

    while (octalNumber != 0) {
      decimalNumber += (octalNumber % 10) * Math.pow(8, i);
      ++i;
      octalNumber /= 10;
    }

    i = 1;

    while (decimalNumber != 0) {
      binaryNumber += (decimalNumber % 2) * i;
      decimalNumber /= 2;
      i *= 10;
    }

    return binaryNumber;
  }
}
