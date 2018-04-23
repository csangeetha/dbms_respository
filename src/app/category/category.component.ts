import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './service/category.service';
import { Router } from '@angular/router';
import {DataService } from '../data.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  categoryId: number;
  cities: any;
  states: any;
  selectedState: any;
  selectedCity: any;
  cuisines: any;
  selectedCuisine: any;
  cuisineList : any;

  constructor(private dataService: DataService,private activatedRoute: ActivatedRoute ,
     private categoryService: CategoryService , private router: Router) { 
    this.activatedRoute.params.subscribe(res =>{ this.categoryId = res.id;
    });
    }

  ngOnInit() {
    this.categoryService.getState().subscribe(data => {this.states = data;});
    console.log(this.selectedState);
    
  }

  onChangeState(){
    console.log(this.selectedState);
    this.categoryService.getCity(this.selectedState.name)
    .subscribe((res:any) => {this.cities = res.location_suggestions});
  }

  onChangeCity(){
    console.log(this.selectedCity);
    this.categoryService.getCuisines(this.selectedCity.id)
    .subscribe((res:any) => { this.cuisines = res.cuisines; console.log(res.cuisines);
    
    });
    
  }
  onChangeCuisine(){
    
  }
  showResturants(){
    this.dataService.changeCategoryId(this.categoryId);
    this.dataService.changeCityId(this.selectedCity.id);
    this.dataService.changeCuisine(this.selectedCuisine);
  }
  

}
