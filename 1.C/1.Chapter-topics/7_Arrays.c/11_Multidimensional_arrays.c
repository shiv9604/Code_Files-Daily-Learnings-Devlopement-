# include<stdio.h>

int main(){
    int n_students = 3;
    int n_subjects = 5;

    int marks[3][5];
    
    // 2 for loops bcoz here are 2 parameters like students and subjects. 

    for(int i=0;i<n_students;i++){ // i is for students

        for(int j=0;j<n_subjects;j++){ // j is for subjects,
        printf("Enter the value of marks for student %d in subject %d:\n",i+1,j+1 );
        scanf("%d",&marks[i][j]); 
        }
    }


    for(int i=0;i<n_students;i++){ // i is for students

        for(int j=0;j<n_subjects;j++){ // j is for subjects,
        printf("The value of marks for student %d in subject %d is: %d\n",i+1,j+1,marks[i][j]);
        }

    }
    return 0;
}