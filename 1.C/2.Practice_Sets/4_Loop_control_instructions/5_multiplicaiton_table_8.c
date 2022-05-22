# include<stdio.h>

int main(){
    int i = 1;
    int sum = 0;
    // int n = 0;
    while(i<=10){
        printf("8 x %d = %d \n",i,i*8);
        ++i;
        sum +=i*8;
    }
    printf("the sum of values of in the table of 8 is %d \n",sum);
    return 0;
}