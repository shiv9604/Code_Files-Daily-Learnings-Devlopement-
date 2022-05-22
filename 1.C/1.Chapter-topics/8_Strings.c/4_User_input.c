# include<stdio.h>

int main(){
    char str[50];
    printf("Enter the String value witout any space : \n");
    scanf("%s",str); //You cannot give space while inputting the string.
    printf("The value of str is %s.",str);

    return 0;
}