import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() btnText:any;
  @Input() link:any;
  constructor() { }

  ngOnInit(): void {
  }

}
