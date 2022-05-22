#include<stdio.h>
int main(){
    int num;

    printf("Please enter the number \n");
    scanf("%d",&num);
    
    if(num==1){ 
        printf("Your number is %d \n",num);
    }
    else if(num==2){
        printf("Your number is %d \n",num);
    }
    else if(num==3){
        printf("Your number is %d \n",num);
    }
    else{
        printf("Your number is not 1,2 or 3 \n");
    }
    return 0;

}