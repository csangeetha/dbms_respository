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

  getAllFavChef(userId){
    return this.http.get('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/getAllFavChef/'+userId,this._headers);
  }

  deleteFavRestaurant(favId){
    return this.http.post('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/deleteFavRestaurant/'+favId,this._headers);
  }

  deleteFavchef(favId){
    return this.http.post('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/deleteFavChef/'+favId,this._headers);
  }

  getAllFollowers(chefId){
    return this.http.get('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/getAllfollowers/'+chefId,this._headers);
  }

  getAllFollowersRes(ownerId){
    return this.http.get('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/getAllRestFollowers/'+ownerId,this._headers);
  }
}
