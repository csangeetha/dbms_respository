import { Component, OnInit } from '@angular/core';
import { AdminService } from './service/admin.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers : [AdminService]
})
export class AdminComponent implements OnInit {
  users:any;
  constructor(private adminService: AdminService,private router : Router,private dataService: DataService) { }

  ngOnInit() {
    this.updateUserData()
  }
  updateUserData(){
    this.adminService.getAllUsers().subscribe(users=> this.users=users);
  }
  deleteUser(id){
    var r = confirm("Delete User "+id+" ?");
    if(r==true){
      this.adminService.deleteUser(id).subscribe(msg=>{
        this.updateUserData()
      })
    }
  }

  updateUser(user){
    console.log(user);
    this.dataService.changeUpdateUser(user);
    this.router.navigate(['update-user'])
    
  }

}
