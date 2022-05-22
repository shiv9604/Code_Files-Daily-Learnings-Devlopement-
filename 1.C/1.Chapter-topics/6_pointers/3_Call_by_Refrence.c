// Nothing is different in call by refrence,You just have to put (*) function declaration
// like void swap(int *a) and not putting return in function defination part and in 
// main function we have to call it by (&a) thats it.

# include<stdio.h>
void wrong_swap(int a, int b);
void swap(int *a,int *b);
int main(){
    int x = 3, y = 4;
    printf("The value of x & y is %d and %d. \n",x,y);
    
    // wrong_swap(x,y); // Will not work due to call by value,
    swap(&x,&y);  // Will work due to call by refrence. in main(&x,&y) and in swap(*a and *b)
    printf("The value of x & y after call by refrence is %d and %d. \n",x,y);
    
    
    return 0;
}

void wrong_swap(int a, int b){
    int temp; // 1.first we created temp block.
    temp = a; // 2.Then we moved a to temp.
    a = b; // 3.we moved b in a.
    b = temp; // 4.The a which we stored in temp now we move that temp in b.
    // Thats how we swaped values of a and b,
}

void swap(int *a,int *b){
    int temp;
    temp = *a;
    *a = *b;
    *b = temp;
}


