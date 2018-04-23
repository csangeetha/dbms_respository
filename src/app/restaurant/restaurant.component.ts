import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RestaurantService} from './service/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  providers: [RestaurantService]
  
})
export class RestaurantComponent implements OnInit {
  fav: boolean ;
  updated: boolean = false;
  restaurantID: any;
  restaurant = {
    user_rating : {
      aggregate_rating : ''
    },
    name : '',
    url :'',
    cuisines : '',
    location : {
      address :''
    }

  }
  user:any;
  resFav :{
    restaurantName:'',
    numberOfFavorites:'',
    rating:''
  }
  foods =[{
    price: '',
    name : '',
    numberOfFavorites : ''

  }]
  constructor(private dataService: DataService,
    private restaurantService : RestaurantService
  ) { }

  ngOnInit() {
    this.dataService.currentRestaurant.subscribe(data => this.restaurantID=data);
    this.dataService.currentUser.subscribe(user => this.user=user);
    this.restaurantService.getRestaurant(this.restaurantID.id).subscribe((data:any) => {
      this.restaurant=data;
      this.dataService.changeShownRestaurant(this.restaurant);
      this.updated=true;

    });

    this.restaurantService.getAllFood().subscribe((foods:any) => this.foods= foods);

  }

  clickOnFav(){
    console.log("click on fav");
    
      
      if(this.user!=undefined){
        if(this.updated){
          console.log(this.user);
      this.dataService.currentshownRestaurant.subscribe(res =>{
        console.log(res);
        
        this.fav=true;
        this.restaurantService.makeFavorite({restaurantName: res.name, rating: parseInt(res.user_rating.aggregate_rating), numberOfFavorites:parseInt(res.user_rating.votes) }, this.user.customerId).subscribe(data => console.log(data));
      })
 
    }
    else{
      alert('Please login first')
    }
    }
    
    
    
  }
  clickOnUnFav(){
    console.log("click on fav");
    this.fav=false;
  }

  orderFood(food){
    console.log(food);
    this.dataService.currentshownRestaurant.subscribe(res =>{
      console.log(res);
      this.restaurantService.createRestaurant({restaurantName: res.name, 
        rating: parseInt(res.user_rating.aggregate_rating), numberOfFavorites:parseInt(res.user_rating.votes) })
        .subscribe(data => {
          var d = new Date();
          var order = {
            orderTotal :food.price,
            dateOfOrder : d,
            status : 'ordered',
            paymentType : 'cash'

          }
          this.restaurantService.createOrder(this.user.userId, data, food.foodRecipeId,order).subscribe(msg => {if(msg>0){
            alert("ordered , check orders")
          }
        else alert("error")});
        }
        
        );
    })
    
  }

}
