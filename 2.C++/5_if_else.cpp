# include<iostream>
using namespace std;
int main(){
    int age ;
    
    cout<<"enter your age: "<<endl;
    cin>>age;
// If else Ladder.

    if(age>=150 || age<4){
        cout<<"Invalid age"<<endl;
        
    }
    else if(age>=18){
        cout<<"You can vote. "<<endl;
    }
   
    else{
        cout<<"You cannot vote. "<<endl;
    }

    return 0;
}