#include <stdio.h>
int main()
{

    int age;
    printf("Enter your age \n");
    scanf("%d", &age);

    if (age >= 18)
    {
        printf("As your age is %d you are Mature \n", age);
    }
    else
    {
        printf("As your age is %d you are Not Mature \n", age);
    }

    return 0;
}