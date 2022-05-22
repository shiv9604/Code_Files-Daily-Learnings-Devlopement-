# include<stdio.h>

int main(){
    float tax = 0, income;
    printf("Please enter your income in rupees \n");
    scanf("%f", &income);
// Tax is only applied remaining amount greater than 2.5 lakhs.

    if(income>=250000 && income<=500000)
    {
        tax = tax + 0.05 * (income - 250000);
    }
    
    if(income>=500000 && income<=1000000)
    {
        tax = tax + 0.20 * (income - 250000);
    }
    
    if(income>=1000000)
    {
        tax = tax + 0.05 * (income - 250000);
    }
    printf("Your tax is %f \n",tax);



    return 0;
}