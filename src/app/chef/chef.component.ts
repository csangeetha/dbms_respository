import { Component, OnInit } from '@angular/core';
import { ChefService } from './service/chef.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.scss'],
  providers : [ChefService]
})
export class ChefComponent implements OnInit {
  user : any;
  chefs : any;
  recipes:any;
  constructor(private cs : ChefService, private ds:DataService) { }

  ngOnInit() {
    this.ds.currentUser.subscribe(user =>{
      this.user=user;
      this.cs.getAllRecipes(user.userId).subscribe(recipes => this.recipes=recipes);
    })
    this.cs.getAllChefs().subscribe(chefs => this.chefs=chefs)
    

  }
  MakeChefFav(id){
    if(this.user!=undefined){
      console.log(id);
      this.cs.makeFavChef(this.user.userId,id).subscribe(msg=>{alert("check favorites page")})
    }
    else{
      alert("login please")
    }
    
  }
  deleteRecipe(id){
    console.log(id);
    this.cs.deleteRecipe(id).subscribe(msg=>{
      this.cs.getAllRecipes(this.user.userId).subscribe(recipes => this.recipes=recipes);
    })
    
  }

}
