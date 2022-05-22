# include<stdio.h>

int main(){
    int marks[5];
    // The format we are going to use mostly is menitoned below.

    for(int i=0;i<5;i++){
        printf("Please enter the marks for student %d: \n", i+1); //i+1 bcoz it will show user to enter the marks from 1 to 5.
        scanf("%d",&marks[i]);
    }

    

    for(int i=0;i<5;i++){
        printf("The value of marks for student %d is %d: \n", i+1,marks[i]); //i+1 bcoz it will show user to enter the marks from 1 to 5.
    }
    return 0;
}   