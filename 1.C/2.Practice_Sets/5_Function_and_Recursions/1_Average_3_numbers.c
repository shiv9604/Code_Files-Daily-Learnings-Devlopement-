# include<stdio.h>
float average(int a,int b, int c);

float main(){
    float a,b,c;

    printf("Enter the value of a. \n");
    scanf("%f",&a);
    
    printf("Enter the value of b. \n");
    scanf("%f",&b);
    
    printf("Enter the value of c. \n");
    scanf("%f",&c);
    
    printf("The average is %f \n",average(a,b,c));
    
    return 0;
}

float average(int a,int b, int c){
    float average;
    average = (a + b + c)/3;
    return average;
}