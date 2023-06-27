import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-title',
  templateUrl: './footer-title.component.html',
  styleUrls: ['./footer-title.component.css']
})
export class FooterTitleComponent implements OnInit {
  
  constructor() {
  }

  @Input() text:any;
  @Input() fontSize:any;

  ngOnInit(): void {
  }
  

}
