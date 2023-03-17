



/*
  In this program, you'll learn to find and display the factorial of a number using a recursive function in Java.
  
  The factorial of a positive number n is given by:
  factorial of n (n!) = 1 * 2 * 3 * 4 * ... * n
  
  The factorial of a negative number doesn't exist. And the factorial of 0 is 1.
  
  Output  :
  Factorial of 6 = 720
  
  Initially, the multiplyNumbers() is called from the main() function with 6 passed as an argument.

  Since 6 is greater than or equal to 1, 6 is multiplied to the result of multiplyNumbers() where 5 (num -1) is passed. 
  Since, it is called from the same function, it is a recursive call.

  In each recursive call, the value of argument num is decreased by 1 until num reaches less than 1.

  When the value of num is less than 1, there is no recursive call.

  And each recursive calls returns giving us:
  6 * 5 * 4 * 3 * 2 * 1 * 1 (for 0) = 720

  17-March-2023
*/


public class Factorial {

    public static void main(String[] args) {
        int num = 6;
        long factorial = multiplyNumbers(num);
        System.out.println("Factorial of " + num + " = " + factorial);
    }
    public static long multiplyNumbers(int num)
    {
        if (num >= 1)
            return num * multiplyNumbers(num - 1);
        else
            return 1;
    }
}
