# include<stdio.h>

int main(){
    int num[10]={1,2,3,4,5,6,7,8,9,10};
    int *ptr = &num[0];
    
    printf("The value of ptr is %d \n",ptr);


    printf("The value of ptr+2 is %d \n",ptr+2);

    // for(int i=0;i<10;i++);
    // printf("The value of ptr is %d \n",ptr);
    // i++;
    return 0;
}