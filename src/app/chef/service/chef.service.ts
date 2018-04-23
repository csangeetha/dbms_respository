import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class ChefService {
  private _headers = {headers: new HttpHeaders()
    .set('Content-Type' , 'application/json')};

  constructor(private http: HttpClient) { }

  getAllChefs(){
    return this.http.get('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/listAllChefs/',this._headers);
  }

  makeFavChef(userId,chefId){
    return this.http.get('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/makeChefFav?custId='+userId+"&chefId="+chefId,this._headers)
  }

  getAllRecipes(chefId){
    return this.http.get('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/listAllChefRecipes/'+chefId,this._headers);
  }

  deleteRecipe(recId){
    return this.http.post('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/deletefoodRecp/'+recId,this._headers);
  }

}
