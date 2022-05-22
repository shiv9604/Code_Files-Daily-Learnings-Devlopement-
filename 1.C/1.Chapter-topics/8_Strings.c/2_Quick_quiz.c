# include<stdio.h>

int main(){
    char str[] = "Harry";
    char *ptr = &str; // *ptr is pointer holding the adress of str.
    while(*ptr !='\0') //We putted condition in ().
    {
        printf("%c",*ptr); //Derefrencing the adress of h and we are getting h.
        *ptr++; // running loop until condition becomes false. 

    } 
    return 0;
}