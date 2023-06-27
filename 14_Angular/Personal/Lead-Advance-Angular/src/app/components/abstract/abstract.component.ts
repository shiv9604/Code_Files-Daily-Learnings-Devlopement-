import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.css']
})
export class AbstractComponent implements OnInit {
  @Input() width:any;
  @Input() p1:any;
  @Input() p2:any;
  @Input() p3:any;
  constructor() { }

  ngOnInit(): void {
  }

}
