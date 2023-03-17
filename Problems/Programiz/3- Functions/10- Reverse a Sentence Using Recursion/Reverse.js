



/*
  Output:
  The reversed sentence is: krow oG
  
  In the above program, we've a recursive function reverse().

  On each iteration, we add (concatenate) the result of next reverse() function to the first character of sentence using charAt(0).

  The recursive call must be before the charAt(), because that way the last characters will start adding to the left-hand side. 
  If you reverse the order, you'll end up with the original sentence.

  In the end, we end up with an empty sentence and reverse() returns the reversed sentence.

  Note: The sentence.substring(1) method returns the portion of the string sentence starting from index 1 to end of the string. 
  To learn more, visit Java String substring().

  17-March-2023
*/


public class Reverse {

  public static void main(String[] args) {
    String sentence = "Go work";
    String reversed = reverse(sentence);
    System.out.println("The reversed sentence is: " + reversed);
  }

  public static String reverse(String sentence) {
    if (sentence.isEmpty())
      return sentence;

    return reverse(sentence.substring(1)) + sentence.charAt(0);
  }
}
