import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-senwell-page',
  templateUrl: './senwell-page.component.html',
  styleUrls: ['./senwell-page.component.css']
})
export class SenwellPageComponent implements OnInit {

  loginForm:UntypedFormGroup;
  loadForm:boolean = false;

  constructor(public snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.formInit()
    
  }

  // ,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}') 
// ,Validators.email
  formInit(){
    this.loginForm = new UntypedFormGroup({
      user: new UntypedFormControl('',[Validators.required]),
      pass: new UntypedFormControl('',[Validators.required])
    })
    this.loadForm = true
    console.log(this.loginForm.get('user').status)
    console.log("Valid Status =>",this.loginForm.valid)
  }

  onSubmit(){
    for(let key in this.loginForm.value){
      this.loginForm.value[key] = this.loginForm.value[key].slice(11)
    }
    console.log("form Values =>",this.loginForm.value)
    this.openSnackbar("Your Response Submitted Sucessfully")
    this.loginForm.reset()
  }

  setSpaces(key:any){
    this.loginForm.controls[key].setValue('           ')
    console.log("Spaces Length =>",'           '.length)
  }

  getState(key:any){
    console.log("Key =>",key)
    let obj = this.loginForm.get(key)
    console.log(`Form Control State of ${key}=>`,obj)
  }

  openSnackbar(msg:any){
    this.snackbar.open(msg,'',{duration:2000})
  }


}
