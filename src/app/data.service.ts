import { Injectable } from '@angular/core';

import { BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {

  private user = new BehaviorSubject<any>({type : '' , firstName : ''});
  private selectedCuisines= new BehaviorSubject<any>([]);
  private cityId = new BehaviorSubject<any>('');
  private categoryId= new BehaviorSubject<any>('');
  private reslist = new BehaviorSubject<any>([]);
  private restaurant = new BehaviorSubject<any>({});
  private shownRestaurant = new BehaviorSubject<any>({});
  private toUpdateUser = new BehaviorSubject<any>({});
  private toUpdateReview = new BehaviorSubject<any>({});
  private toUpdateOrder = new BehaviorSubject<any>({});
  private toUpdateAddress = new BehaviorSubject<any>({});
  private toUpdatePhone = new BehaviorSubject<any>({});

  currentCuisines=this.selectedCuisines.asObservable();
  currentCityId=this.cityId.asObservable();
  currentCategoryId =this.categoryId.asObservable();
  currentReslist =this.reslist.asObservable();
  currentRestaurant=this.restaurant.asObservable();
  currentUser=this.user.asObservable();
  currentshownRestaurant = this.shownRestaurant.asObservable();
  currentToUpdateUser = this.toUpdateUser.asObservable();
  currentToUpdateReview =this.toUpdateReview.asObservable();
  currentToUpdateOrder = this.toUpdateOrder.asObservable();
  currentToUpdateAddress = this.toUpdateAddress.asObservable();
  currentToUpdatePhone = this.toUpdatePhone.asObservable();


  constructor() { }
  changeUpdateAddress(toUpdateAddress: any){
    this.toUpdateAddress.next(toUpdateAddress)
  }

  changeUpdatePhone(toUpdatePhone: any){
    this.toUpdatePhone.next(toUpdatePhone)
  }

  changeUpdateUser(toUpdateUser: any){
    this.toUpdateUser.next(toUpdateUser)
  }

  changeUpdateReview(toUpdateReview: any){
    this.toUpdateReview.next(toUpdateReview)
  }

  changeUpdateOrder(toUpdateOrder: any){
    this.toUpdateOrder.next(toUpdateOrder)
  }

  changeUser(user:any){
    this.user.next(user)
  }

  changeCuisine(cuisines: any) {
    this.selectedCuisines.next(cuisines)
  }

  changeCityId(cityId: number){
    console.log(cityId);
    
    this.cityId.next(cityId);
    console.log(this.cityId);
    
  }

  changeCategoryId(categoryId: number){
    this.categoryId.next(categoryId);
  }

  changeResList(resList: any){
    this.reslist.next(resList);
  }

  changeRestaurant(restaurant: any){
    this.restaurant.next(restaurant);
  }

  changeShownRestaurant(restaurant: any){
    this.shownRestaurant.next(restaurant);
  }

}
