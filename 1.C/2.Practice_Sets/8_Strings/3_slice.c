# include<stdio.h>
int slice(char *st,int m,int n){
    int i = 0;
    while((m+i)<n){
        st[i] = st[i+m]; // st[i] = means string itration starting from st[i].
        // st[i] = st[i+m]; //  st[i+m]       
        
        i++;
    }
    st[i] = '\0';

}


int main(){
    
    char st[] = "shivisgreat";
    slice(st,0,4); //last charecter is always exculsive.
    printf("%s",st);
    
    return 0;
}