#include <stdio.h>
int main()
{
    int radius = 3;
    float pi = 3.14;
    int height = 3;

    int area = pi* radius * radius;
    int volume = area * height;

    printf("The area of circle is %f \n", area);
    printf("The volume of cylinder is %f \n", volume);

    return 0;
}
