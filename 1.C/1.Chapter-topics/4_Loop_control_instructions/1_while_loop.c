# include<stdio.h>

int main(){
    int num;
    printf("enter the num \n");
    scanf("%d",&num);

    while(num<10){
        printf("%d \n",num);
        num++;
    }

    return 0;
}