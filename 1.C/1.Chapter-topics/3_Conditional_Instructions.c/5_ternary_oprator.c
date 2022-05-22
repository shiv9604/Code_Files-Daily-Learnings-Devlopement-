# include<stdio.h>

int main(){
    int a;
    printf("Enter a \n");
    scanf("%d", &a);
    // Its like lambda function,
    // One liner ternary oprator(if else function in one line as like lambda expression)
    // structure : (Condition)? (If print function):(else print function)

    (a > 5)? printf("greater than 5"):printf("not greater than 5");
    return 0;
}