import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { name } from '../State/counter-selectors';

@Component({
  selector: 'app-counter-name',
  templateUrl: './counter-name.component.html',
  styleUrls: ['./counter-name.component.css']
})
export class CounterNameComponent implements OnInit {
  name$:any;
  constructor(public store:Store<any>) { }

  ngOnInit(): void {
    this.name$ = this.store.select(name)
  }

}
