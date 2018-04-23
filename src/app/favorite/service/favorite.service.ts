import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class FavoriteService {
  private _headers = {headers: new HttpHeaders()
    .set('Content-Type' , 'application/json')};
  constructor(private http: HttpClient) { }


  getAllFav(userId){
    return this.http.get('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/getAllFav/'+userId,this._headers);
  }
}
