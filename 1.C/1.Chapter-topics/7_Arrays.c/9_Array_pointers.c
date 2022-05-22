# include<stdio.h>

int main(){
    int marks[4];
    int *ptr;
    ptr = &marks[0];

    for(int i =0;i<4;i++){
        printf("%d.Enter the value of marks for student %d:\n",i+1,i+1);
        scanf("%d",ptr);
        ptr++; // It is taking adress of next element. memory madhye pudhchya adress la next value detoy.
        
    }

    
    for(int i =0;i<4;i++){
        printf("%d.The value of marks for student %d is %d.\n",i+1,i+1,marks[i]);
        ptr++;  // It is taking adress of next element.
        
    } 
    
    return 0;
}