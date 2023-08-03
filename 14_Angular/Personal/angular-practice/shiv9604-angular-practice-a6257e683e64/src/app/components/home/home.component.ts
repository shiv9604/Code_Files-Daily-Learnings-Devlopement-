import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menus:any = [
    {
      name:'Forms',
      route:'/form'
    },
    
    {
      name:'todo-list',
      route:'/todo-list'
    },
    {
      name:'DePronto',
      route:'/test-home'
    },
    {
      name:'senwell-page',
      route:'/senwell-page'
    },
    {
      name:'search-with-pipe',
      route:'/search-with-pipe'
    },
    {
      name:'ngRx-Counter',
      route:'/ngrx-counter'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
