 # include<stdio.h>
int strlen(char *st){ //*st is charecter pointer bcoz its changale. 
    char *ptr = st;
    int len = 0;
    while(*ptr!= '\0'){
        len++;
        ptr++;
    }
}
 
 int main(){
     char st[] ="Harry";
     int l = strlen(st);
     printf("The lenth of string is %d \n",l); 
     return 0;
 }