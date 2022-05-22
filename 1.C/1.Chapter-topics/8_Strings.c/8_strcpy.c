# include<stdio.h>
#include <string.h>

int main(){
    char *str = "This";
    char str2[45];
    strcpy(str2,str); //copy's content of str2 and pass to it into first. 
    printf("Now the str2 is %s",str2);
    return 0;
}