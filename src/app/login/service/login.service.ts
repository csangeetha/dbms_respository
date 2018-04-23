import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {
  private _headers = {headers: new HttpHeaders()
    .set('Content-Type' , 'application/json')}

  constructor(private http: HttpClient) { }

  loginCustomer(username: string, password: string){
    return this.http.post('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/customer',
    {"username" : username, "password" : password},this._headers);
  }
  loginChef(username: string, password:string){
    return this.http.post('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/chef', 
    {"username" : username, "password" : password},this._headers);
  }
  loginOwner(username: string, password:string){
    return this.http.post('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/owner', 
    {"username" : username, "password" : password},this._headers);
  }

  loginAdmin(username: string, password: string){
    return this.http.post('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/admin',
    {"username" : username, "password" : password},this._headers);
  }

}
