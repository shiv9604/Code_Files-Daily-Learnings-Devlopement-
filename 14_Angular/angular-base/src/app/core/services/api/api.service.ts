import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public get(url: any) {
    const httpOptions = {
      headers: new HttpHeaders({}),
    };
    console.log(url);
    return this.http.get(url, httpOptions);
  }

  //POST
  public post(url: any, data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    console.log(url);
    return this.http.post(url, data, httpOptions);
  }

  //PUT

  public put(url: any, data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    console.log(url);
    return this.http.put(url, data, httpOptions);
  }

  public delete(url: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.delete(url);
  }

  //Image Upload Post
  public callPostApiForImage(url: string, data: any) {
    const formData: FormData = new FormData();

    formData.append('file', data);
    // formData.append('isSaveToLocal', 'false');

    // console.log("url", url,data,options);

    return this.http.post(url, formData);
  }
}
