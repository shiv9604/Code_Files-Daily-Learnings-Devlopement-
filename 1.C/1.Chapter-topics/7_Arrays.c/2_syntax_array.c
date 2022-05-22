# include<stdio.h>

int main(){
    int marks[4];

    printf("Enter the marks for sudent 1:\n");
    scanf("%d",&marks[0]);

    printf("Enter the marks for sudent 2:\n");
    scanf("%d",&marks[1]);

    printf("Enter the marks for sudent 3:\n");
    scanf("%d",&marks[2]);

    printf("Enter the marks for sudent 4:\n");
    scanf("%d",&marks[3]);
 
    printf("The value of students marks1,marks2,marks3 and marks4 are %d, %d, %d, %d. \n",marks[0],marks[1],marks[2],marks[3]);
    return 0;
}