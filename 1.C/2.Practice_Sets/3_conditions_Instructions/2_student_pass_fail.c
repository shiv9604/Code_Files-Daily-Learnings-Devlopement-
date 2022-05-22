#include <stdio.h>

int main()
{
    int physics, chemistry, Maths;

    printf("Please enter marks of the physics \n");
    scanf("%d", &physics);

        printf("Please enter marks of the chemistry \n");
    scanf("%d", &chemistry);

        printf("Please enter marks of the Maths \n"); 
    scanf("%d", &Maths);

        float total = (physics + chemistry + Maths)/ 3;

    if ((total < 40) || physics < 33 || chemistry < 33 || Maths < 33)
    {

        printf("Your total percentage is %f and You are failed \n",total);
    }
    else
    {
        printf("Your total percentage is %f and You are passed \n",total);
    }
    return 0;
}
