import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class RecipeService {
  private _headers = {headers: new HttpHeaders()
    .set('Content-Type' , 'application/json')}
  constructor(private http: HttpClient) { }

  createRecipe(userId,data){
    return this.http.post('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/foodRecpcreation/'+userId,data,this._headers);
  }

  createRestaurant(userId,data){
    return this.http.post('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/restaurantcreation/'+userId,data,this._headers)
  }

}
