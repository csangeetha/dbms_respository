import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {OwnerService} from './service/owner.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss'],
  providers : [OwnerService]
})
export class OwnerComponent implements OnInit {
  restaurants:any;
  user:any;
  constructor( private dataService : DataService, private ownerService :OwnerService) { }

  ngOnInit() {
    this.dataService.currentUser.subscribe(user=>{
      this.user=user
      this.ownerService.getAllRestaurants(user.userId).subscribe(data=>this.restaurants=data);
    })
  }
  deleteRes(id){
    console.log(id);
    this.ownerService.deleteRestaurant(id).subscribe(msg=>{
      this.ownerService.getAllRestaurants(this.user.userId).subscribe(data=>this.restaurants=data);
    })
  }

}
