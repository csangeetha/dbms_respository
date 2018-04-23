import { Component, OnInit } from '@angular/core';
import { HomeService } from './service/home.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  user: any ;

  constructor(private homeService: HomeService, private ds : DataService) { }

  ngOnInit() {
    this.ds.currentUser.subscribe(user=> this.user=user)
   
  }

}
