#include <stdio.h>

int main()
{
    int num1, num2, num3, num4;

    printf("please enter the num1 \n");
    scanf("%d", &num1);

    printf("please enter the num2 \n");
    scanf("%d", &num2);

    printf("please enter the num3 \n");
    scanf("%d", &num3);

    printf("please enter the num4 \n");
    scanf("%d", &num4);

    if (num1 >= num2 && num1 >= num3 && num1 >= num4)
        
    {
        printf("%d is greatest num,\n", num1);
    }

    else if(num2 >= num1 && num2 >= num3 && num2 >= num4)
    {
        printf("%d is greatest num,\n", num2);
    }

    else if(num3 >= num1 && num3 >= num2 && num3 >= num4)
    {
        printf("%d is greatest num,\n", num3);
    }

    else
    {
        printf("%d is graeater than num,\n", num4);
    }

    return 0;
}