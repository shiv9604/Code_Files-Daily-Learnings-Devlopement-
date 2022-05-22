#include <iostream>
using namespace std;
int main()
{
    int age;
    cout << "Enter your age" << endl;
    cin >> age;

    switch (age)
    {

    case 12:
        cout << "You are 12 years old" << endl;
        break;

    case 18:
        cout << "you are 18" << endl;
        break;

    default:
        cout << "you are not 12 or nor 18" << endl;
        break;
    }

    return 0;
}