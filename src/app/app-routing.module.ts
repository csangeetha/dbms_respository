import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CategoryComponent } from './category/category.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { OrderComponent } from './order/order.component';
import { ReviewComponent } from './review/review.component';
import { WriteReviewComponent } from './write-review/write-review.component';

const routes: Routes = [
  {
  path : '',
  component: HomeComponent
},
{
  path : 'login',
  component: LoginComponent
},
{
  path : 'register',
  component: RegisterComponent
},
{
  path : 'category/:id',
  component: CategoryComponent
},
{
  path : 'category/:id/restaurants',
  component : RestaurantListComponent
},
{
  path : 'restaurant/:res_id',
  component : RestaurantComponent
},
{
  path : 'favorites',
  component : FavoriteComponent
},
{
  path : 'orders',
  component : OrderComponent
},
{
  path : 'reviews',
  component : ReviewComponent
},
{
  path: 'review-order/:order_id',
  component : WriteReviewComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
