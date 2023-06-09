import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/storage/local/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  userAuth: boolean = false;

  public login(): void {
    // After login Sucess Call the setToken method with token
  }

  public logOut(): void {
    this.localStorageService.clear();
    this.router.navigate(['/login']);
  }

  public getToken(): string {
    return this.localStorageService.get('auth');
  }

  public setToken(token: string): boolean {
    return this.localStorageService.set('auth', token);
  }

  public isTokenExpired(): void {
    // Check Current Time is less than Token Expiration Time .
  }

  public refreshToken(): void {
    // Call Login Method So You will get new_token and it will be stored automatically in local storage.
  }

  public isWhiteListedUrls(): boolean {
    let token = this.getToken();
    return token === null || token === undefined;
  }
}
