import { Component, OnInit } from '@angular/core';
import{DataService } from '../data.service';
import {CreateUserService} from './service/create-user.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss'],
  providers : [CreateUserService]
})
export class CreateUsersComponent implements OnInit {
  types : any = ['','customer', 'chef' , 'resturant owner']
  data: any ={
    firstName : '',
    lastName :'',
    type : '',
    email : '',
    dob : '',
    username : '',
    password : ''
  }
  user:any ={
    type: '',
    userId : ''

  }
  constructor(private dataService : DataService, private createUserService : CreateUserService,private router : Router) { }

  ngOnInit() {
    this.dataService.currentUser.subscribe(user=> this.user=user);

  }

  onSubmit(){
    console.log(this.data);
    if(this.data.type=='customer'){
      this.createUserService.createCustomer(this.data).subscribe(msg => {console.log(msg); this.router.navigate([''])});
      
    }
    if(this.data.type=='chef'){
      this.createUserService.createChef(this.data).subscribe(msg => {console.log(msg); this.router.navigate([''])});
      
    }
    if(this.data.type=='resturant owner'){
      this.createUserService.createOwner(this.data).subscribe(msg => {console.log(msg); this.router.navigate([''])});  
    }
    
  }

}
