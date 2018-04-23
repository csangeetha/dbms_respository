import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DataService } from '../data.service';
import {RestaurantListService } from './service/restaurant-list.service';
@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss'],
  providers:[RestaurantListService]
})

export class RestaurantListComponent implements OnInit {
  categoryId: number;
  searchString : string;
  cityId: number;
  cuisines : any;
  cuisineParsed: string=''
  reslist = [{
    restaurant :{
      name: '',
      cuisines:'',
      location : {
        address :'',
        city : ''
      },
      user_rating:{
        aggregate_rating :''
      }
    }
  }];

  constructor(private dataService: DataService ,private rlService: RestaurantListService) { }

  ngOnInit() {
    this.getInitialData()
    if(this.cuisines==undefined){
     this.rlService.getRestaurantListCL(this.cityId,this.categoryId).subscribe((data:any) => this.reslist=data.restaurants);
    this.dataService.changeResList(this.reslist);
    }
    else{
      this.getResList();
      this.dataService.changeResList(this.reslist);
    }    
  }

  getInitialData(){
    this.dataService.currentCityId.subscribe(cityId =>this.cityId=cityId);
    this.dataService.currentCategoryId.subscribe(categoryId => this.categoryId=categoryId);
    this.dataService.currentCuisines.subscribe(cuisines => this.cuisines=cuisines);
  }
  getResList(){
    console.log(this.cuisines.length);
    if(this.cuisines.length ==1){
      console.log(this.cuisines[0].cuisine.cuisine_id);
      
      this.cuisineParsed=this.cuisines[0].cuisine.cuisine_id;
      this.rlService.getRestaurantList(this.cityId,this.cuisineParsed,this.categoryId).subscribe((data:any) => this.reslist=data.restaurants);

    }
    else {
      for(var i=0;i<this.cuisines.length-1;i++){
        console.log(this.cuisines);
        this.cuisineParsed=this.cuisineParsed+this.cuisines[i].cuisine.cuisine_id.toString()+"%2C"   
      }
      this.cuisineParsed=this.cuisineParsed+this.cuisines[this.cuisines.length-1].cuisine.cuisine_id.toString();
      console.log(this.cuisineParsed);
      this.rlService.getRestaurantList(this.cityId,this.cuisineParsed,this.categoryId).subscribe((data:any) => this.reslist=data.restaurants) 
    }
  }
  storeRestaurant(r){
    console.log(r);
    this.dataService.changeRestaurant(r);
    
  }

}
