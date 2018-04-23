import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class OrderService {
  private _headers = {headers: new HttpHeaders()
    .set('Content-Type' , 'application/json')}
  constructor(private http:HttpClient) { }

  getAllOrders(userId: number){
    return this.http.get('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/getAllOrders/'+userId,this._headers);
  }

}
