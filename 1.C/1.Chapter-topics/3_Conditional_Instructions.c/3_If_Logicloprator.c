#include <stdio.h>
int main()
{

    int age;
    int vippass = 0;
    // vippass = 1;

    printf("Enter your age \n");
    scanf("%d", &age);

    if ((age >= 18 && age <= 70) ||(vippass == 1)) // (&& = And),(|| = Or), (! = Not)
    {
        printf("You are above 18 and below 70, you can drive. \n", age);
    }
    else
    {
        printf("You cannot drive");
    }

    return 0;
}