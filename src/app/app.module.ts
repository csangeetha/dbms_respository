import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http'
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { CustomerComponent } from './customer/customer.component';
import { ChefComponent } from './chef/chef.component';
import { OwnerComponent } from './owner/owner.component';
import { AdminComponent } from './admin/admin.component';
import { AnonymousComponent } from './anonymous/anonymous.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ReviewComponent } from './review/review.component';
import { ProfileComponent } from './profile/profile.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { CityComponent } from './city/city.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { CategoryComponent } from './category/category.component';
import { RecipeComponent } from './recipe/recipe.component';
import { WriteReviewComponent } from './write-review/write-review.component';
import { FilterPipe } from './filter.pipe';
import { Pipe, PipeTransform } from '@angular/core';
import { FollowersComponent } from './followers/followers.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import { UpdateUsersComponent } from './update-users/update-users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CustomerComponent,
    ChefComponent,
    OwnerComponent,
    AdminComponent,
    AnonymousComponent,
    CartComponent,
    OrderComponent,
    FavoriteComponent,
    ReviewComponent,
    ProfileComponent,
    RestaurantComponent,
    CityComponent,
    CuisineComponent,
    RestaurantListComponent,
    CategoryComponent,
    RecipeComponent,
    WriteReviewComponent,
    FilterPipe,
    FollowersComponent,
    CreateUsersComponent,
    UpdateUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    MatButtonModule,
    NgSelectModule, FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  exports : [FilterPipe]
})
export class AppModule { }
