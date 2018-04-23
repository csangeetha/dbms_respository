import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class RegisterService {
  private _headers = {headers: new HttpHeaders()
    .set('Content-Type' , 'application/json')}
  constructor(private http: HttpClient) { }
  registerCustomer(customer : any){
    return this.http.post('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/customercreation',customer,this._headers);
  }
  registerChef(chef : any){
    return this.http.post('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/chefcreation',chef,this._headers);
  }
  registerOwner(owner : any){
    return this.http.post('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/ownercreation',owner,this._headers);
  }
}
