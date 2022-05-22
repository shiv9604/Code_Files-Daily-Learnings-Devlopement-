# include<stdio.h>
// &i = gives adress of i.
// *i = gives value of i,
// *(&j) = gives the value of j.
// **k = pointer of pointer. 

int main(){
    int i = 34;
    int *j = &i; //it will now store the adress of i.
    int **k = &j;

    printf("1.The valeu of i is %d \n",i);
    printf("2.The value of i is %d \n",*j);
    
    // How to find adress of i -> (%u,&i) or (%u,j)
    
    printf("3.The adress of i is %u \n",&i);   
    printf("4.The adress of i is %u \n",j);
    
    // How to find adress of j as well)-> &j 
    
    printf("5.The adress of j is %u \n",&j);   

    // How top find value of j -> *(&j)

    printf("6.Value of j is %u \n",*(&j));

    // how to find adress of k which is pointer of pointer (k)

    printf("7.The adress of k is %u\n",&k);

    // how to find value of k which is pointer of pointer (k)

    printf("8.The value of k is %u\n",**(&k));
    

    return 0;
}