# include<stdio.h>

int main(){
    int a = 3, *ptr = &a,**ptr1 = &ptr;
    printf("The Value of ptr is: %u \n",ptr);  
    printf("The Value of ptr after addition is: %u \n",ptr++);
    printf("The Value of ptr after substraction is: %u \n",ptr--); 
    // ptr = ptr -ptr1;
    // printf("The Value of ptr after substraction of 1 pointer from another is: %u \n",ptr);
    // ptr = ptr||ptr1; 
    // printf("The Value of ptr after comparision is: %u \n",ptr || ptr1);  

   
    return 0;
}