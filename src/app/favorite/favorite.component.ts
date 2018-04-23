import { Component, OnInit } from '@angular/core';
import { FavoriteService } from './service/favorite.service';
import {DataService} from '../data.service';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
  providers : [FavoriteService]
})
export class FavoriteComponent implements OnInit {
  favs =[ {
    restaurantName : '',
    restaurantId : '',
    numberOfFavorites : '',
    rating :''
  }]
  user : any;
  chefs =[{
    firstName: '',
    lastName : '',
    favId : '',
    email :''
  }]
  followersRes:any;

  followers:any;
  constructor(private favoriteService: FavoriteService , private dataService : DataService) { }

  ngOnInit() {
    this.dataService.currentUser.subscribe(user => {this.user=user;
      this.favoriteService.getAllFav(this.user.userId).subscribe((data:any) => this.favs=data);
      this.favoriteService.getAllFavChef(this.user.userId).subscribe((data:any) => this.chefs=data);
      this.favoriteService.getAllFollowers(this.user.userId).subscribe((data:any)=>this.followers=data);
      this.favoriteService.getAllFollowersRes(this.user.userId).subscribe((data:any)=>this.followersRes=data);
    });
    
  }

  deleteFav(id){
    console.log(id);
    this.favoriteService.deleteFavRestaurant(id).subscribe(msg=>{
      this.favoriteService.getAllFav(this.user.userId).subscribe((data:any) => this.favs=data);
    })
    
  }
  deleteFavChef(favId){
    this.favoriteService.deleteFavchef(favId).subscribe(msg => {
      this.favoriteService.getAllFavChef(this.user.userId).subscribe((data:any) => this.chefs=data);
    });
  }

}
