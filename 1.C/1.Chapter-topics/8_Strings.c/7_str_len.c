# include<stdio.h>
#include <string.h>

int main(){
    char *str = "Shiv";
    // printf("%s",str);
    int a = strlen(str); 
    printf("Str len function value is : %d",a); // this gives value of len excluding the null char. 
    return 0;
}