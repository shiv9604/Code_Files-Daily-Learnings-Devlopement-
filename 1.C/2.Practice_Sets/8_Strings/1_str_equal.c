# include<stdio.h>
# include<string.h>

int main(){
    char st1[35];
    char st2[35];
    char c;
    int i=0;

    printf("Please enter the value of first string \n");
    scanf("%s",st1);
    printf("Enter the value of first string charecter by charecter\n"); //Bcoz we are going to use %c means char

    while(c!='\n'){
        fflush(stdin); //if ther is scanf after scanf we have to use fflush.
        scanf("%c",&c); // This is taking input char by char.
        st2[i] = c;
        i++;
    }
    st2[i-1]='\0';

    printf("The value of string 1 is %s \n",st1);
    printf("The value of string 2 is %s\n",st2);

    printf("Strcmp of st1 and st2 is %d \n",strcmp(st1,st2));
    
    


    return 0;
}