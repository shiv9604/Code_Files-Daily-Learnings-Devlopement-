# include<stdio.h>
void SA(int a,int b,int *sum,float *avg){ //int *sum, int *avg are pointers,
    *sum = a + b;
    *avg = (float)*sum/2;
}

int main(){
    int i = 3;
    int j = 4;
    int sum;
    float avg;
    SA(i,j,&sum,&avg);
    printf("The value of sum is %d \n",sum);
    printf("The value of sum is %f \n",avg);

    
    return 0;
}