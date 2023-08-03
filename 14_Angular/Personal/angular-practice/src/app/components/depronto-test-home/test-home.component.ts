import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-home',
  templateUrl: './test-home.component.html',
  styleUrls: ['./test-home.component.css']
})
export class TestHomeComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  routeTo(path:any){
    console.log("Routing To =>",path)
    this.router.navigate([path])
  }

}
