# include<iostream>
using namespace std;
int main(){
    // int arr[9] = {1,2,3,4,5,6,7,8,9};
    // cout<<arr[];
    int i;
    int marks[6];
    for(i=0;i<6;i++){
        
        cout<<"enter the marks of "<<i<<"th student"<<endl;
        cin>>marks[i];
    }

    // for printing we have to put another for loop.

      for(i=0;i<6;i++){
    
        cout<<i<<".The marks of student "<<i<<" is "<<marks[i]<<"."<<endl;
    }
    return 0;
}