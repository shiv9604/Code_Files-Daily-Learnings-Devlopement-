# include<stdio.h>

int main(){
    char str[50];
    printf("Enter the Multi Word String value with spaces : \n");
    gets(str); //instead of scanf gets() function is used for multi word string.
    // printf("The value of str is %s.",str);
    puts(str); 
    return 0;
}