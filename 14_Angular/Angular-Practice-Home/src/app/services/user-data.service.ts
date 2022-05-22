import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  url:any="http://localhost:3000/data";

  constructor(private http:HttpClient) {}

  users(){
    return this.http.get(this.url)
  }
  
  addUser(data:any){
    return this.http.post(this.url, data) 
  }

  deleteUser(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }

  editUserInServer(dataToupdate:any,id:number){
    return this.http.put(`${this.url}/${id}`,dataToupdate)
  }
  
}
