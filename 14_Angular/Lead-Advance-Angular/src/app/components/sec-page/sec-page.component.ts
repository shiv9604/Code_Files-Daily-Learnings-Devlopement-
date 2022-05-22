import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sec-page',
  templateUrl: './sec-page.component.html',
  styleUrls: ['./sec-page.component.css']
})
export class SecPageComponent implements OnInit {

  constructor(private currentRoute:Router) { }

  ngOnInit(): void {
  }

  isRouteCorrect(): boolean{
    return this.currentRoute.url=="/sec-page"
  }

}
