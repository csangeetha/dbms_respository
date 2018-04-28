import { Component, OnInit } from '@angular/core';
import { UpdateAddressService } from './service/update-address.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.scss'],
  providers : [UpdateAddressService]
})
export class UpdateAddressComponent implements OnInit {
  user:any ={
    type: '',
    userId : ''
  }
  data : any ={
    street1 : '',
    street2 : '',
    city : '',
    state : '',
    zipcode : ''
  }
  constructor(private dataService : DataService,private router : Router , private updateAddressService : UpdateAddressService) { }

  ngOnInit() {
    this.dataService.currentUser.subscribe(user=> this.user=user);
    this.dataService.currentToUpdateAddress.subscribe(address => this.data=address);
  }

  onSubmit(){
    console.log(this.data);

    this.updateAddressService.updateAddress(this.data).subscribe(msg=>{ console.log(msg)
      if(msg==1){
        alert("update success");
        this.router.navigate(['profile']);
      } 
    });
    
  }

}
