#include <stdio.h>
float calculator(float mass);

float main()
{
    float mass;
    printf("Enter the value of mass in kg's. \n");
    scanf("%f", &mass);

    printf("The value of force in newton is %.2f.\n", calculator(mass));

    return 0;
}

float calculator(float mass)
{
    float result;
    result = mass * 9.8;
    return result;
}
