import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ProfileService } from './service/profile.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers : [ProfileService]
})
export class ProfileComponent implements OnInit {
  user:any ={
    type: '',
    userId : ''
  }

  address : any = {
    street1 : '',
    street2 : '',
    city : '',
    state : '',
    zipcode : ''
  }
  phone  : any={
    areacode : '',
    phoneNumber : ''
  }  
  constructor(private dataService : DataService , private profileService : ProfileService , private router : Router) { }

  ngOnInit() {
    this.dataService.currentUser.subscribe(user=> {
      this.user=user;  console.log(this.user)
      this.profileService.getUserAddress(this.user.userId).subscribe(address => this.address=address);
    this.profileService.getUserPhone(this.user.userId).subscribe(phone =>this.phone=phone );
    });  
  }

  updateUserInfo(){
    this.dataService.changeUpdateUser(this.user);
    this.router.navigate(['update-user'])
  }

  updateAddress(){
    this.dataService.changeUpdateAddress(this.address);
    this.router.navigate(['update-address'])
  }
  
  updatePhone(){
    this.dataService.changeUpdatePhone(this.phone);
    this.router.navigate(['update-phone'])
  }

}
