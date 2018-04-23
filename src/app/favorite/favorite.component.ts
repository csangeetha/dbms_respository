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
  constructor(private favoriteService: FavoriteService , private dataService : DataService) { }

  ngOnInit() {
    this.dataService.currentUser.subscribe(user => {this.user=user;
      this.favoriteService.getAllFav(this.user.userId).subscribe((data:any) => this.favs=data);
    });
    
  }

}
