# include<stdio.h>
void rev(int *arr,int n){
    for(int i =0;i<(7/2);i++){
        int temp;
        temp =  arr[i];
        arr[i] = arr[n-i-1]; //where n = 9(last digit) and i = 19 startig digit.
        arr[n-i-1] = temp;
    
    }
}
int main(){
    int arr [] = {1,2,3,4,5,6,7,8,9};
    rev(arr,9);
    for(int i =0;i<9;i++){
        printf("The value of %d element is: %d\n",i+1,arr[i]);
        
    }
    

    return 0;
}