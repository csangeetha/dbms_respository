import { Component, OnInit } from '@angular/core';
import {LoginService } from './service/login.service';
import {DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  types : any = ['','customer', 'chef' , 'resturant owner','admin']
  data ={
    username: '',
    password: '',
    type : ''
  } 
  user :any;
  constructor(private loginService:LoginService, private dataService: DataService, private router: Router) { }

  ngOnInit() {

  }

  onSubmit(){
    console.log(this.data);
    if(this.data.type=='customer'){
      this.loginService.loginCustomer(this.data.username, this.data.password).subscribe(user => this.redirectLoginCustomer(user) );
    }
    else if(this.data.type=='chef'){
      this.loginService.loginChef(this.data.username,this.data.password).subscribe(user => this.redirectLoginChef(user));
    }
    else if(this.data.type=='resturant owner'){
      this.loginService.loginOwner(this.data.username,this.data.password).subscribe(user => this.redirectLoginOwner(user));
    }
    else if(this.data.type=='admin'){
      this.loginService.loginAdmin(this.data.username,this.data.password).subscribe(user => this.redirectLoginAdmin(user));
    }
    else{
      alert("choose valid type")
    }
  }

  redirectLoginCustomer(user){
   
    if(user.customerId!=0){
      user.type='customer'
      this.dataService.changeUser(user);
      this.user=user;
      this.router.navigate(['']);
    }
    else{
      alert("invalid credentials")
    }
  }

  redirectLoginChef(user){
    if(user.chefId!=0){
      user.type='chef'
      this.dataService.changeUser(user);
      this.user=user;
      this.router.navigate(['']);
    }
    else{
      alert("invalid credentials")
    }
  }
  redirectLoginOwner(user){
    if(user.resturantOwnerId!=0){
      user.type='owner'
      this.dataService.changeUser(user);
      this.user=user;
      this.router.navigate(['']);
    }
    else{
      alert("invalid credentials")
    }
  }

  redirectLoginAdmin(user){
    if(user.userId!=0){
      user.type='admin'
      this.dataService.changeUser(user);
      this.user=user;
      this.router.navigate(['']);
    }
    else{
      alert("invalid credentials")
    }
  }

}
