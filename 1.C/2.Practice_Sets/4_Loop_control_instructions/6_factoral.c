#include <stdio.h>

int main()
{
    // factorial(4)= 1*2*3*4*5
    int i = 0,n,factorial = 1;
    printf("enter the n for which you want to find out factorial. \n");
    scanf("%d",&n);
    
    for (i = 1; i <= n; ++i)
    {
        factorial *= i;
    }
    printf("facorial of %d is %d", n, factorial);
    return 0;
}