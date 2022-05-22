# include<stdio.h>

int main(){
    int i = 0;
// break breaks the loop whether condition is true or false,
    do{
        printf("the value of i is %d \n",i);
        if(i==4){
            break;
        }
        i++;
    }while(i<10);
    return 0;
}