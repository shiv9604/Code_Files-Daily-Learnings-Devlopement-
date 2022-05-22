#include<stdio.h>
int main(){
    
    int x = 2, y = 3, z = 3, k = 1;
    int result = 3*x/y-z+k; // Oprator Associativity goes from left to right.
        //6/3 - 3 + 1 
        // 2 - 3 +1
        // -1+1
        // 0
        printf("%d",result);

    return 0;
}