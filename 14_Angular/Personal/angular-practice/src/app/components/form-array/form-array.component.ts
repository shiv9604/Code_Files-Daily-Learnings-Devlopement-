import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    skills: new FormArray([])
  });

  constructor() { }

  ngOnInit(): void {
  }

  public addSkill() {
    const control = new FormControl('');
    this.skills.push(control);
  }

  public save() {
    console.log("Data : ",this.form.value)
  }

  public remove(index:number) {
    this.skills.removeAt(index)
  }

  public get skills() {
    return this.form.get('skills') as FormArray;
  }
}
