#include <stdio.h>
#include<math.h>

int main()
{
    int a = 1;
    int b = 2;
    printf("The value of a + b is %d \n", a + b);
    printf("The value of a - b is %d \n", a - b);
    printf("The value of a * b is %d \n", a * b);
    printf("The value of a / b is %d \n", a / b);

    int z;
    z = b * a; // Legal
    // b*a =z; // Illegal,We cant give = before oprator(+, *, -, /)

    printf("The value of z %d \n", z);

    // 1.The remainder % Oprator.

    printf("When 5 is divided by 2 leaves of ramainder of %d \n",5%2);
    printf("When -5 is divided by 2 leaves of ramainder of %d \n",-5%2); // The sign of oprator will appears in result.
    printf("When 5 is divided by 2 leaves of ramainder of %d \n",5%-2);

    // 2.No oprator assumed to be present in C like a.b or ab
    printf("The value of 4 * 5 is %d \n",4*5);
    
    // printf("The value of 4 * 5 is %d \n",4 5); // Illegal


    // 3. no oprator to perform exponential(the power of) in C.
    //printf("The value of 4^5 is %"4^5) //Illegal
    printf("The value of 4^5 is %f \n",pow(4,5)); //We Can print with pow() function from #include<math.h>.

    // 4. Type Conversion: Arithmatic Oprations in between
        // 1-> int & int = int
        // 2-> int & float = float
        // 3-> float & float = float
    
    // 5. Conditions for type conversion.
       // 1-> int a = 3.5 will be stored as 3(int)
       // 2-> float a = 3 will be stored as 3.0(float)

    

    return 0;
}