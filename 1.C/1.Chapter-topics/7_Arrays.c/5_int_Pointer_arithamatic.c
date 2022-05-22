# include<stdio.h>

int main(){
    int i = 34;
    int *ptr = &i;
    // char c = 34;
    // char *ptrC = &c;
    printf("The value of ptr is %u\n",ptr);

    ptr++; //This will give another adress bcoz ptr++ added 4bytes to  adress of i.
    printf("1.The value of ptr after adding 4 bytes is %u.\n",ptr);

    // insted of writing ptr++ multiple times we can write as ptr = ptr + n
    // n = number wants to ptr++ (will acts as a n*4 for int) 
    
    ptr = ptr + 1; //4*1 = 4
    printf("2.The value of ptr after adding 4 bytes is %u.\n",ptr);
    
    ptr = ptr + 2; //4*2 = 12
    printf("3.The value of ptr after adding 4 bytes is %u.\n",ptr);
    
    ptr = ptr + 3; //4*3 = 12
    printf("4.The value of ptr after adding 4 bytes is %u.\n",ptr);

    

//From here arithmatic pointers for float started    
    
    float f = 34;
    float *ptrF = &f;
    
    printf("\tThe value of folat ptrC is %u\n",ptrC);

    ptrF++; //This will give another adress bcoz ptr++ added 4bytes to  adress of i.
    printf("1.The value of ptr after adding 4 bytes is %u.\n",ptrC);
 
    // n = number wants to ptr++ (will acts as a n*1 for char) 
    
    ptrC = ptrC + 1; //4*1 = 4
    printf("2.The value of ptrC after adding 1 bytes is %u.\n",ptrC);
    
    ptrC = ptrC + 2; //4*2 = 12
    printf("3.The value of ptrC after adding 1 bytes is %u.\n",ptrC);
    
    ptrC = ptrC + 3; //4*3 = 12
    printf("4.The value of ptrC after adding 1 bytes is %u.\n",ptrC);

    
    return 0;
}
