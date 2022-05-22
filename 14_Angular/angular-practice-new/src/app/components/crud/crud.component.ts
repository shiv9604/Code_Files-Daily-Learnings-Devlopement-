import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { userType } from 'src/app/userType';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  users: any;
  userToEdit:any = {
    name: "",
    adress: "",
    emailId: "",
    moNumber: "",
    password: "",
    isActive: "",
    id: ""
  }
  userIdToUpdate:any;
  dataToEdit:boolean=false
  constructor(private userData: UserDataService) {
          this.getData();
    
  }

  ngOnInit(): void {
  }
  getData(){
    this.userData.users().subscribe((result)=>{
      this.users = result;
      console.log(result)
    })
  }
  postData(item: userType) {
    console.log(item)
    this.userData.addUser(item).subscribe((result) => {
      console.log(result)
      location.reload()
    })
  }
  deleteRow(id:number){
    alert("Are you sure you want to delete the User?")
    this.users.splice(id-1,1)
     this.userData.deleteUser(id).subscribe((result)=>{
      console.log(result)
      // location.reload()
    })
  }

  editUser(datatoedit:any,id:number){
    this.userToEdit = datatoedit
    this.userIdToUpdate=id
    this.dataToEdit=!this.dataToEdit
  }

  updateUser(){
  this.userData.editUserInServer(this.userToEdit,this.userIdToUpdate).subscribe((result) => {
    alert("Are you sure you want to Update the User?")
    console.log(result)
    location.reload()
  }) 
}

}
