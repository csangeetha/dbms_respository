import { Component, OnInit } from '@angular/core';
import { HomeService } from './service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  userType: any = "customer";

  constructor(private homeService: HomeService) { }

  ngOnInit() {
   
  }

}
