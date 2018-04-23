import { Component, OnInit } from '@angular/core';
import{DataService } from '../data.service';
import {UpdateUserService} from './service/update-user.service';
import {Router } from '@angular/router';


@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.scss'],
  providers : [UpdateUserService]
})
export class UpdateUsersComponent implements OnInit {
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
  constructor(private dataService : DataService, private updateUserService : UpdateUserService,private router : Router) { }

  ngOnInit() {
    this.dataService.currentUser.subscribe(user=> this.user=user);
    this.dataService.currentToUpdateUser.subscribe(data => this.data=data);
  }
onSubmit(){
  console.log(this.data);
  this.updateUserService.updateUser(this.data).subscribe(msg=>{ console.log(msg)
    if(msg==1){
      alert("update success");
      this.router.navigate(['']);
    } 
  });
  
}


}
