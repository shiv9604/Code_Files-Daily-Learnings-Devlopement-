 // How to take User input
 # include<iostream>
 using namespace std;
 int main(){
    int a, b;
    cout<<"1.Enter the first number"<<endl; // endl ends the line like \n and moves cursor to next line
    cin>>a; // Where the input going.

    cout<<"2.Enter the second number"<<endl; // endl ends the line like \n and moves cursor to next line
    cin>>b; // Where the input going.

    cout<<"The sum of a and b is "<<a+b<<endl; // To print the output of the users input.

// Arithmatic oprators
    cout<<"a + b is "<<a + b<<endl;
    cout<<"a - b is "<<a - b<<endl;
    cout<<"a * b is "<<a * b<<endl;
    cout<<"a / b is "<<(float)a / b<<endl; // float gives the exact answer for division oprator.
    
     return 0;
 }