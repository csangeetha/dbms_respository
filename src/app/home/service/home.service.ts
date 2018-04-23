import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class HomeService {
 
  constructor(private http: HttpClient) {
   }

}
