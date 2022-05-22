# include<stdio.h>
#include <string.h>

int main(){
    char str1[10] = "Harry";
    char *str2 = "shiv";
    strcat(str1,str2); //Concatinates the 2 strings.(Without space)
    printf("Now the st1 after concatination is %s",str1);

    return 0;
}