import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate,CanActivateChild {
  loggedIn:boolean = true;

  constructor(public router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if(this.loggedIn){
      return true
    }
    else{
      this.router.navigate(['/404'])
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):any{
    if(this.loggedIn){
      return true
    }
    else{
      this.router.navigate(['/404'],{fragment:'IMP'})
    }
  }
  
  

  
}
