import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { RecipeService } from './service/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  providers : [RecipeService]
})
export class RecipeComponent implements OnInit {

  data={
    name:'',
    ingredients:'',
    difficultyLevel:'',
    cookTime:''
  }
  user={
    type:'',
    userId:''
  }
  dataRes ={
    restaurantName:'',
    numberOfFavorites:'',
    rating : ''
  }
  constructor(private ds: DataService,private rs: RecipeService) { }

  ngOnInit() {
    this.ds.currentUser.subscribe(user=>{
      console.log(user);
      this.user=user;});
  }
  onSubmit(){
    console.log(this.data);
    this.ds.currentUser.subscribe(user=>{
      console.log(user);
      this.user=user;
      this.rs.createRecipe(user.userId,this.data).subscribe(msg=>{alert("check all recipes")});
    })
   
  }
  onSubmitRestaurant(){
    console.log(this.dataRes);
    this.rs.createRestaurant(this.user.userId,this.dataRes).subscribe(msg=>{alert("check all restaurants")});
    
  }

}
