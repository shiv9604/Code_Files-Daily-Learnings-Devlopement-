# include<iostream>
using namespace std;
int add(int a, int b){ //Function declration
    return a + b; // function defination
}
int main(){
   int a,b;
    a = 5; // passing arguements
    b = 4;
    // cout << "Enter your number 1" << endl;
    // cin >>a;
    
    // cout << "Enter your number 1" << endl;
    // cin >>b;

    cout<<"sum of your values is "<<add(a,b)<<endl;
   
    return 0;
}