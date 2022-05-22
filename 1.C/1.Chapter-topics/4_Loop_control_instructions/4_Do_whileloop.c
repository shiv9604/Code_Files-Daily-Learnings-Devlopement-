# include<stdio.h>
// In do while loop,if condition is not meeting,at least one statement will print which enclosed in do loop.
int main(){
    int a = 0;
    int n;
    printf("enter the n \n");
    scanf("%d",&n);

    do{
        printf("the value of a without n is %d \n",a+1);
        a++;
    }while(a<n);
    return 0;
}