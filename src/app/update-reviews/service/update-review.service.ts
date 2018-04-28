import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class UpdateReviewService {
  private _headers = {headers: new HttpHeaders()
    .set('Content-Type' , 'application/json')};

  constructor(private http: HttpClient) { }

  updateReview(review : any){
    return this.http.post('http://104.156.224.24:8080/CS5200-project-new/rest/restaurant/update-review/'+review.rateAndReviewId,review,this._headers);
  }

}
