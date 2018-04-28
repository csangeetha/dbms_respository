import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class UpdateAddressService {
  private _headers = {headers: new HttpHeaders()
    .set('Content-Type' , 'application/json')};

  constructor(private http: HttpClient) { }

  updateAddress(address : any){
    return this.http.post('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/update-address/'+address.addressId,address,this._headers);
  }

}
