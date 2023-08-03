import { Component, OnInit } from '@angular/core';
import {UntypedFormControl,UntypedFormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls:['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getStatusChanges()
    this.getValueChanges()
  }

    loginForm= new UntypedFormGroup({
      username: new UntypedFormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      password: new UntypedFormControl('',[Validators.required,Validators.minLength(6)])
    })

  userLogin(){
    console.log("Form Valus",this.loginForm.value)
  }
  get username(){
    return this.loginForm.get('username')
  }
  get password(){
    return this.loginForm.get('password')
  }

  isAlreadyPresent(control:UntypedFormControl):any{
      if(control.value.includes('shiv')){
        let validation = { nameInvalid : true }
          console.log("Form Control +>",control)
          return validation
    }
  }
  
  // We can set the default values
  setValues(){
    this.loginForm.setValue({
      username:'Saikiran',
      password:'Password@123'
    })
  }

  getStatusChanges(){
    this.loginForm.statusChanges.subscribe(res=>console.log("Form Valid Status =>",res))
  }

  getValueChanges(){
    this.loginForm.valueChanges.subscribe(res=>console.log("Value Changes =>",res))
  }

}
