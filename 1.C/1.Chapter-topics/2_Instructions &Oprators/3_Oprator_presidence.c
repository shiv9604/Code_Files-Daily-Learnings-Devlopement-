#include<stdio.h>
int main(){

     int x = 2;
     int y = 3;

     printf("The value of 3*x-8*y is %d \n", (3*x) - (8*y));
     printf("The value of 8*x / 3*x %d \n",(8*y) / (3*x));
    // 8*x / 3*x = 24/6 will give the wring answer
    // 24 / 3*2
    // 8*2
    // 16
    return 0;
}