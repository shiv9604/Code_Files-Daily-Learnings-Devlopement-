# include<stdio.h>

int main(){
    int a = 3, b = 6422220;

    printf("1.The adress of a is %d. \n",&a);
    printf("2.The value of b in which adress of a is stored is %u. \n",*(&b));
    return 0;
}
