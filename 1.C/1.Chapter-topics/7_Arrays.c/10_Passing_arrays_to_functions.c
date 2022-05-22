# include<stdio.h>
// void printArray(int *ptr,int n){// Aray ka pahela wala adress = ptr and array ka size lega = n.
//     for(int i=0; i<n; i++){
//         printf("The value of element %d is %d \n",i+1,*(ptr+i)); //ptr+i = is adress of i and *(ptr+i) = values of ptr + i
//     }
// }

void printArray(int ptr[],int n){// Aray ka pahela wala adress = ptr and array ka size lega = n.
    for(int i=0; i<n; i++){
        printf("The value of element %d is %d \n",i+1,ptr[i]); //ptr+i = is adress of i and *(ptr+i) = values of ptr + i
    }
    ptr[2] = 4545; //adress of arr[2] soo its going to change value in main.
}
 
int main(){
    int arr[]= {1,2323,65456,54,654,321,23};
    printArray(arr,7); // 7 is size and  limitation for array.
    printf("The value of arr[2] after changing is %d \n",arr[2]); // bcoz we passed adress of arr[2] as ptr[2] in function block.
    return 0;
}