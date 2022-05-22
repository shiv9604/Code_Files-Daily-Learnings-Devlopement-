
// C program check weather number is even or odd.
#include <stdio.h>
int main()
{
    int num;
    printf("Please enter the number \n");
    scanf("%d", &num);
    if (num % 2 == 0)
    {
        printf("Your entered number %d is even \n", num);
    }
    else{
        printf("Your entered number %d is odd \n", num);
    }
    return 0;
}