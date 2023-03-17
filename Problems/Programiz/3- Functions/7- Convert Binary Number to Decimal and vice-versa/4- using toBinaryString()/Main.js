



/*
  Output  :
  91 in decimal = 1011011 in binary.
  
  Here, the toBinaryString() method takes an integer argument and returns the string representation of the number in base 2 (binary).

  17-March-2023
*/


class Main {
  public static void main(String[] args) {
    
    // decimal number 
    int decimal = 91;
    
    // convert decimal to binary
    String binary = Integer.toBinaryString(decimal);
    System.out.println(decimal + " in decimal = " + binary + " in binary.");
  }
}
