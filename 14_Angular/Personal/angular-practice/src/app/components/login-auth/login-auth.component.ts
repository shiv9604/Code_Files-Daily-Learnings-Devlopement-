import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.component.html',
  styleUrls: ['./login-auth.component.css']
})
export class LoginAuthComponent implements OnInit {

  constructor(public router:ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.router.fragment.subscribe(res=>console.log("Fragment =>",res))
  }

}
