# include<stdio.h>

void test(int *a){
    printf("This is a testing of call by refrence.\n");
}
int main(){
    int a;
    test(&a);

    
    return 0;
}