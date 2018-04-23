import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class RestaurantListService {
  private _headers = {headers: new HttpHeaders()
    .set('Content-Type' , 'application/json')
    .append('user-key' , '70ae61a7e3d0d9ae55332122c1bb0279')};

  constructor(private http: HttpClient) { }
  
  getRestaurantList(cityId,cuisineList,categoryId){
    //25%2C1%2C4
   
    return this.http.get('https://developers.zomato.com/api/v2.1/search?entity_id='
    +cityId+'&entity_type=city&cuisines='+cuisineList+'&category='+categoryId,this._headers);
  }

  getRestaurantListCL(cityId,categoryId){

    return this.http.get('https://developers.zomato.com/api/v2.1/search?entity_id='
      +cityId+'&entity_type=city&start=0&count=20&category='+categoryId,this._headers)
     
  }

  getRestaurantListCL1(cityId,categoryId){

    return this.http.get('https://developers.zomato.com/api/v2.1/search?entity_id='
      +cityId+'&entity_type=city&start=20&count=20&category='+categoryId,this._headers)
     
  }

  getRestaurantListCL2(cityId,categoryId){

    return this.http.get('https://developers.zomato.com/api/v2.1/search?entity_id='
      +cityId+'&entity_type=city&start=40&count=20&category='+categoryId,this._headers)
     
  }

  getRestaurantListCL3(cityId,categoryId){

    return this.http.get('https://developers.zomato.com/api/v2.1/search?entity_id='
      +cityId+'&entity_type=city&start=60&count=20&category='+categoryId,this._headers)
     
  }
  getRestaurantListCL4(cityId,categoryId){

    return this.http.get('https://developers.zomato.com/api/v2.1/search?entity_id='
      +cityId+'&entity_type=city&start=80&count=20&category='+categoryId,this._headers)
     
  }
  getRestaurantListCL5(cityId,categoryId){

    return this.http.get('https://developers.zomato.com/api/v2.1/search?entity_id='
      +cityId+'&entity_type=city&start=100&count=20&category='+categoryId,this._headers)
     
  }

}
