import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class RestaurantService {
  private _headers = {headers: new HttpHeaders()
    .set('Content-Type' , 'application/json')
    .append('user-key' , '70ae61a7e3d0d9ae55332122c1bb0279')};

    private new_headers = {headers: new HttpHeaders()
      .set('Content-Type' , 'application/json')};

  constructor(private http: HttpClient) { }

  getRestaurant(resId: any){
    return this.http.get('https://developers.zomato.com/api/v2.1/restaurant?res_id='+resId,this._headers);
    }

    makeFavorite(res: any, userId:number){
      return this.http.post('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/createFavRestaurant/'+userId,res,this.new_headers);
    }

    getAllFood(){
      return this.http.get('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/getAllFoodRecipes',this._headers);
    }

    createRestaurant(restaurant: any){
      console.log(restaurant);
      
      return this.http.post('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/restaurantcreation', restaurant, this._headers)
    }

    createOrder(userId, resId,foodRecipeId,order){
      return this.http.post('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/createorder?userId='
      +userId+'&restId='+resId+'&fmId='+foodRecipeId,order,this._headers);
    }
  }
