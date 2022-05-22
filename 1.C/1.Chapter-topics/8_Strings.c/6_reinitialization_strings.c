# include<stdio.h>

int main(){
    // char ptr[] = "Harry"; //In this we cannot make changes in this. 
    char *ptr = "1.Harry \n"; // By using ptr string can be change else not,
    printf("%s",ptr);
    ptr = "2.Shiv";
    printf("%s",ptr);

    return 0;
}