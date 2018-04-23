import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class CustomerService {
  private _headers = {headers: new HttpHeaders()
    .set('Content-Type' , 'application/json')
    .append('user-key' , '70ae61a7e3d0d9ae55332122c1bb0279')};

  constructor(private http: HttpClient) { }

  public getCategories(){
    let header = new HttpHeaders()
    return this.http
    .get('https://developers.zomato.com/api/v2.1/categories',this._headers);
  }

}
