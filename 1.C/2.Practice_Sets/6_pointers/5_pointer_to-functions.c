# include<stdio.h>

int main(){
    int i  =345;
    int *ptr; //we have to use compulsory * or ** to variables.
    int **ptr_ptr;
    ptr =  &i;
    ptr_ptr = &ptr;

    printf("The value of i is %d \n",**ptr_ptr); //**ptr_ptr for value of ptr_ptr.
    return 0;
}