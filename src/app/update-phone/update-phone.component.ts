import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { UpdatePhoneService } from './service/update-phone.service';

@Component({
  selector: 'app-update-phone',
  templateUrl: './update-phone.component.html',
  styleUrls: ['./update-phone.component.scss'],
  providers : [UpdatePhoneService]
})
export class UpdatePhoneComponent implements OnInit {
  user:any ={
    type: '',
    userId : ''
  }

  data : any = {
    areacode : '',
    phoneNumber : ''
  }

  constructor(private dataService : DataService,private router : Router , private updatePhoneService : UpdatePhoneService) { }

  ngOnInit() {
    this.dataService.currentUser.subscribe(user=> this.user=user);
    this.dataService.currentToUpdatePhone.subscribe(phone => this.data=phone);
  }

  onSubmit(){
    console.log(this.data);

    this.updatePhoneService.updatePhone(this.data).subscribe(msg=>{ console.log(msg)
      if(msg==1){
        alert("update success");
        this.router.navigate(['profile']);
      } 
    });
    
  }

}
