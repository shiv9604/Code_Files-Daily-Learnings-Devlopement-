# include<stdio.h>

int main(){
    int mul[10],n;
    printf("Enter the value for the table");
    scanf("%d",&n);
    for(int i=0;i<10;i++){
        mul[i] = n*(i+1); // Thats how its stored in mul.
    }
    for(int i=0;i<10;i++){
        printf("%d x %d = %d\n",n,i+1,mul[i]);

    }
    return 0;
}