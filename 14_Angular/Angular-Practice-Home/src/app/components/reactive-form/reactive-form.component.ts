import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    loginForm= new FormGroup({
      username: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)])
    })

  userLogin(){
    console.warn(this.loginForm.value)
  }
  get username(){
    return this.loginForm.get('username')
  }
  get password(){
    return this.loginForm.get('password')
  }
}
