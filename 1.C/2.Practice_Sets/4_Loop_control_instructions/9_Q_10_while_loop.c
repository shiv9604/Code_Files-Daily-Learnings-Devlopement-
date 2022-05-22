#include <stdio.h>

int main()
{
    int i =2;
    int n; 
    int prime = 1;
    printf("Please enter the number wheather you want to know prime or not.\n");
    scanf("%d",&n);

    // int n, prime = 1;
    while(i<n)
    {
        
        if (n % i == 0)
        {
            prime = 0;
            
            break;
        }
        i++;
    }
    if (prime == 0 && n != 2)
    {
        printf("This is not a prime number. \n");
    }
    else
    {
        printf("This is a prime number. \n");
    }
    return 0;
}