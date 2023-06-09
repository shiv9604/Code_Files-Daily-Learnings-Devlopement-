import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public set(key: string, value: any): boolean {
    if (!key && !value) return false;
    localStorage.setItem(key, value);
    return true;
  }

  public get(key: string): any {
    if (!key) return undefined;
    return localStorage.getItem(key);
  }

  public remove(key: string): boolean {
    if (!key) return false;
    localStorage.removeItem(key);
    return true;
  }

  public clear(): boolean {
    localStorage.clear();
    return true;
  }
}
