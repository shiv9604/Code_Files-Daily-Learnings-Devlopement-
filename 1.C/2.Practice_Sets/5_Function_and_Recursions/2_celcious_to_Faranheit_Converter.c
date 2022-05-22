# include<stdio.h>
float converter(float n);

float main(){
    float n;
    printf("Enter the value of celcious. \n");
    scanf("%f",&n);

    printf("The value in Fahrenheit is %.2f \n",converter(n));

    return 0;
}

float converter(float n){
    float result; 
    result = (n * 9/5) + 32;
    return result;

}
