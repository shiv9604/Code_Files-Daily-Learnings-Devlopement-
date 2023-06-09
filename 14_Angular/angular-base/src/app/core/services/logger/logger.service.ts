import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  public log(messgae: string) {
    console.log('Logger Service :', messgae);
  }

  public logError(message: string) {
    console.error('Logger Service Error:', message);
  }
}
