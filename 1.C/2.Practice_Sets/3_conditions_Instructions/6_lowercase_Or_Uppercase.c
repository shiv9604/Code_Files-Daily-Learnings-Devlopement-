# include<stdio.h>

int main(){
    char charecter;
    printf("please enter the charecter,\n");
    scanf("%c",&charecter);

    if(charecter>='a' && charecter<='z')
    {
        printf("The charecter %c is lowercase.\n",charecter);
    }

    else if(charecter>='A' && charecter<='Z')
    {
        printf("The charecter %c is uppercase.\n",charecter);
    }
    
    else
    {
        printf("The charecter %c is nor uppercase or lowercase char,\n",charecter);
    }
    return 0;
}