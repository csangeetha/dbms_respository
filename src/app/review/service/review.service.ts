import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class ReviewService {
  private _headers = {headers: new HttpHeaders()
    .set('Content-Type' , 'application/json')};

  constructor(private http: HttpClient) { }

  getAllReviews(userId){
    return this.http.get('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/getAllReviews/'+userId,this._headers)
  }

  createReview(review : any , orderId: number){
    return this.http.post('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/createrateReview/'+orderId,
    review,this._headers)
  }

  deleteReview(reviewId:number){
    return this.http.post('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/deleterateReview/'+reviewId,this._headers)
  }
}
