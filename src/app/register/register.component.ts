import { Component, OnInit } from '@angular/core';
import {RegisterService} from './service/register.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers : [RegisterService]
})
export class RegisterComponent implements OnInit {
  types : any = ['','customer', 'chef' , 'resturant owner'];
  data ={
    firstName:'',
    username:'',
    email:'',
    password:'',
    type:''
  }
  constructor(private regService : RegisterService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.data);
    if(this.data.type==''){
      alert("Please choose a type");
    }
    if(this.data.firstName==''){
      alert('Please give a name')
    }
    if(this.data.username==''){
      alert('Please give a username')
    }if(this.data.password==''){
      alert('Please give a password')
    }
    if(this.data.type!=''&& this.data.username!=''&& this.data.password!=''&&this.data.firstName!=''){
      if(this.data.type=='customer'){
        this.regService.registerCustomer(this.data).subscribe(res => {
          if(res>0){
            this.router.navigate(['login'])
          }
          else{
            alert("error in customer creation")
          }
        })
      }
      else if(this.data.type=='chef'){
        this.regService.registerChef(this.data).subscribe(res => {
          if(res>0){
            this.router.navigate(['login'])
          }
          else{
            alert("error in chef creation")
          }
        })
      }
      else if(this.data.type=='resturant owner'){
        this.regService.registerOwner(this.data).subscribe(res => {
          if(res>0){
            this.router.navigate(['login'])
          }
          else{
            alert("error in owner creation")
          }
        })
      }
    }
    
  }

}
