import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  user : any;

  constructor(private dataService: DataService, private router: Router){}
  ngOnInit() {
    this.dataService.currentUser.subscribe(user => this.user=user);
  }
  logout(){
    this.dataService.changeUser({firstName:'',type:''});
    this.router.navigate([''])
  }

}
