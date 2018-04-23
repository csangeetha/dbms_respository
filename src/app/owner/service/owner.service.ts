import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class OwnerService {
  private _headers = {headers: new HttpHeaders()
    .set('Content-Type' , 'application/json')}
  constructor(private http:HttpClient) { }

  getAllRestaurants(userId: number){
    return this.http.get('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/getAllRestOfOwner/'+userId,this._headers);
  }

  deleteRestaurant(resId:number){
    return this.http.post('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/deleterestaurant/'+resId,this._headers);
  }

}
