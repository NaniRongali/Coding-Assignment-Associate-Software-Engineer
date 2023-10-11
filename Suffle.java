
	import java.util.Random;
	import java.util.Arrays;
	public class Suffle
	{
	 
	    public static void main(String[] args)
	    {
	         
	         int[] arr = {1, 2, 3, 4, 5, 6, 7};
	         int b = arr.length;
	         rand (arr, b);
	        System.out.println(Arrays.toString(arr));
	    }
	   static void rand( int array[], int a)
	    {
	        Random rd = new Random();
	    
	        for (int i = a-1; i > 0; i--) {
	            int j = rd.nextInt(i+1);    
	            int temp = array[i];
	            array[i] = array[j];
	            array[j] = temp;
	        }
	    }
	   }
	     


// Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it. 