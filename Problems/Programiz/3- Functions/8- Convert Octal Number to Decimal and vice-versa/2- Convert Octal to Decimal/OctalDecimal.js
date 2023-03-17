



/*
  Output  :
  116 in octal = 78 in decimal
  
  This conversion takes place as:
  1 * 82 + 1 * 81 + 6 * 80 = 78

  17-March-2023
*/


public class OctalDecimal {

    public static void main(String[] args) {
        int octal = 116;
        int decimal = convertOctalToDecimal(octal);
        System.out.printf("%d in octal = %d in decimal", octal, decimal);
    }

    public static int convertOctalToDecimal(int octal)
    {
        int decimalNumber = 0, i = 0;

        while(octal != 0)
        {
            decimalNumber += (octal % 10) * Math.pow(8, i);
            ++i;
            octal/=10;
        }

        return decimalNumber;
    }
}
