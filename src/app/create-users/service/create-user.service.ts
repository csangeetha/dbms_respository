import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class CreateUserService {

  private _headers = {headers: new HttpHeaders()
    .set('Content-Type' , 'application/json')};
  constructor(private http: HttpClient) { }

  createCustomer(customer:any){
    return this.http.post('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/customercreation',customer,this._headers);
  }

  createChef(chef:any){
    return this.http.post('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/chefcreation',chef,this._headers);
  }
  createOwner(owner:any){
    return this.http.post('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/ownercreation',owner,this._headers);
  }

}
