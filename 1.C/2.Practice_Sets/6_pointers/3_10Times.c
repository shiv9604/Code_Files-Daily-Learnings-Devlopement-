# include<stdio.h>
// Nothing is different in call by refrence,You just have to put (*) function declaration
// like void swap(int *a) and not putting return in function defination part and in 
// main function we have to call it by (&a) thats it.
void fun1(int *a){
    int result;
    result = *a*10;
     
}
int main(){
    int a = 3;
    fun1(&a);
    printf("The value multiplied by 10 times is %d. \n",a*10);
    
    return 0;
}