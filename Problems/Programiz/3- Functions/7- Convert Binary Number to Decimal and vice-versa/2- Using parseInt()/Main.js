



/*
  Output  :
  01011011 in binary = 91 in decimal.
  
  Here, we have used the parseInt() method of the Integer class to convert a binary number into decimal.

  17-March-2023
*/


class Main {
  public static void main(String[] args) {
    
    // binary number
    String binary = "01011011";
    
    // convert to decimal
    int decimal = Integer.parseInt(binary, 2);
    System.out.println(binary + " in binary = " + decimal + " in decimal.");
  }
}
