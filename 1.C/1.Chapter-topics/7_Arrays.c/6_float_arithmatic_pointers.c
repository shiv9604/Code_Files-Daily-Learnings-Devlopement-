# include<stdio.h>

int main(){
    //From here arithmatic pointers for float started    
    
    float f = 34;
    float *ptrF = &f;
    
    printf("The value of folat ptrF is %u\n",ptrF);

    ptrF++; //This will give another adress bcoz ptr++ added 4bytes to  adress of i.
    printf("1.The value of ptrF after adding 4 bytes is %u.\n",ptrF);
 
    // n = number wants to ptrF++ (will acts as a n*4 for float) 
    
    ptrF = ptrF + 1; //4*1 = 4
    printf("2.The value of ptF after adding 1 bytes is %u.\n",ptrF);
    
    ptrF = ptrF + 2; //4*2 = 12
    printf("3.The value of ptrF after adding 1 bytes is %u.\n",ptrF);
    
    ptrF = ptrF + 3; //4*3 = 12
    printf("4.The value of ptrF after adding 1 bytes is %u.\n",ptrF);
    

    return 0;
}