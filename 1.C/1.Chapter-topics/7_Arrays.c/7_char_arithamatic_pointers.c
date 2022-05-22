# include<stdio.h>

int main(){
    // From here arithmatic pointers for char started    
    
    char c = 34;
    char *ptrC = &c;
    
    printf("The value of charecter ptrC is %u\n",ptrC);

    ptrC++; //This will give another adress bcoz ptr++ added 4bytes to  adress of i.
    printf("1.The value of ptrC after adding 1 bytes is %u.\n",ptrC);
 
    // n = number wants to ptrC++ (will acts as a n+1 for char) 

    ptrC = ptrC + 1; //4*1 = 4
    printf("2.The value of ptC after adding 1 bytes is %u.\n",ptrC);
    
    ptrC = ptrC + 2; //4*2 = 12
    printf("3.The value of ptrC after adding 1 bytes is %u.\n",ptrC);
    
    ptrC = ptrC + 3; //4*3 = 12
    printf("4.The value of ptrC after adding 1 bytes is %u.\n",ptrC);
    

    return 0;
}