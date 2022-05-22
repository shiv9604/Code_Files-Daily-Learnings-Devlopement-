import { Injectable } from '@angular/core';

import {AngularFireDatabase,AngularFireList} from '@angular/fire/compat/database'

@Injectable({
  providedIn: 'root'
})
export class FirebaseCrudService {

  private dbPath = '/users'
  users:AngularFireList<any>;
  constructor(private db:AngularFireDatabase) { 
    this.users = db.list(this.dbPath)
  }

  getUsers(){
    console.log(this.users)
  }
  createUser(userData:any){
    this.users.push(userData)
  }






}
