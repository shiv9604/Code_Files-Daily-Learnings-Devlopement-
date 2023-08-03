import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
    public snackbar: MatSnackBar,
  ) {}

  public get(url:any) {
      const httpOptions = {
        headers: new HttpHeaders({
        }),
      };
      console.log(url);
      return this.http.get(url,httpOptions);
    
  }

  //POST
  public post(url:any, data:any) {
    
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'authorization': "vvv"
        }),
      };
      console.log(url);
      return this.http.post(url, data, httpOptions);
  }

  //PUT

  public put(url:any, data:any) {
 
      console.log(url);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'Authorization':'Token' + " " +auth_token
        }),
      };
      return this.http.put(url, data, httpOptions);
    
  }

  public delete(url:any) {

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'Authorization':'Token' + " " +auth_token
        }),
      };
      return this.http.delete(url);
    
  }


  //Image Upload Post
  public callPostApiForImage(url: string, data: any) {

      let formData: FormData = new FormData();

      formData.append('file', data);
      // formData.append('isSaveToLocal', 'false');

      // console.log("url", url,data,options);

      return this.http.post(url, formData);

  }

  openSnackbar(massage:any, action:any) {
    this.snackbar.open(massage, action, { duration: 2000 });
  }
}
