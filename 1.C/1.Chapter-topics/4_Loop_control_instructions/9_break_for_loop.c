# include<stdio.h>
// break in for loop is placed in below the print function in if.
int main(){
    for(int i = 0;i<1000;++i){
        printf("the value of i is %d \n",i);
        if(i==5){
            break;
         }
        
    }
    return 0;
}