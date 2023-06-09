import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor() {}

  public set(key: string, value: any): boolean {
    if (!key && !value) return false;
    sessionStorage.setItem(key, value);
    return true;
  }

  public get(key: string): any {
    if (!key) return undefined;
    return sessionStorage.getItem(key);
  }

  public remove(key: string): boolean {
    if (!key) return false;
    sessionStorage.removeItem(key);
    return true;
  }

  public clear(): boolean {
    sessionStorage.clear();
    return true;
  }
}
