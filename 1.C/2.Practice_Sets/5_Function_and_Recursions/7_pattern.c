# include<stdio.h>
int pattern(int a);

int main(){
    int a = 4;
    pattern(a);
    
    return 0;
}
// for a = 3
// *
// * *
// * * * * *
// 1 = 1
// 2 = 3
//  3 = 5
//  soo formula = a = (2a-1) 
int pattern(int a){
    if(a==1){
        printf("*\n");
        return;
    }
    pattern(a-1);

    for(int i =0;i<2*a-1;i++){
        printf("*");
    }
    
    printf("\n");
    


}
