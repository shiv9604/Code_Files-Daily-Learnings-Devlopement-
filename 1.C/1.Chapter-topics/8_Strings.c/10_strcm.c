# include<stdio.h>
#include <string.h>

int main(){
    char str1[10] = "Harry";
    char *str2 = "Harry";
    int val = strcmp(str1,str2); //
    printf("Now the st1 after comparision is %d",val);
    /// Gives 0 if value is exact
    ///gives positive (1) if next char of str1 is greater than str2
    ///gives Negative (-1) if next char of str1 is Lower than str2


    return 0;
}