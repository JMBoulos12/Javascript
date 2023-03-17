



/*
  This program takes two positive integers and calculates GCD using recursion.
  
  Output  :
  G.C.D of 366 and 60 is 6.
  In the above program, the recursive function is called until n2 is 0. In the end, the value of n1 is the GCD or HCF of the given two numbers.

  17-March-2023
*/


public class GCD {

    public static void main(String[] args) {
        int n1 = 366, n2 = 60;
        int hcf = hcf(n1, n2);

        System.out.printf("G.C.D of %d and %d is %d.", n1, n2, hcf);
    }

    public static int hcf(int n1, int n2)
    {
        if (n2 != 0)
            return hcf(n2, n1 % n2);
        else
            return n1;
    }
}
