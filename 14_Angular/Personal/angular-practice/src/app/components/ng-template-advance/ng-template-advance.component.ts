import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { interval, take,Observable,toArray,of } from 'rxjs';

@Component({
  selector: 'app-ng-template-advance',
  templateUrl: './ng-template-advance.component.html',
  styleUrls: ['./ng-template-advance.component.css']
})
export class NgTemplateAdvanceComponent implements OnInit {

  demoForm: FormGroup = new FormGroup({
    email: new FormControl(""),
    pass: new FormControl(""),
  })
  counter: number = 0;
  
  obs:Observable<any> = of('Data');
  constructor() { }

  ngOnInit(): void {
  }


  public get email() {
    this.counter++;
    return this.demoForm.get('email');
  }
}
