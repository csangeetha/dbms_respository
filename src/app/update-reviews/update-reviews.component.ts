import { Component, OnInit } from '@angular/core';
import{DataService } from '../data.service';
import {UpdateReviewService} from './service/update-review.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-update-reviews',
  templateUrl: './update-reviews.component.html',
  styleUrls: ['./update-reviews.component.scss'],
  providers : [UpdateReviewService]
})
export class UpdateReviewsComponent implements OnInit {
  user:any ={
    type: '',
    userId : ''

  }

  data :any = {
    id : '',
    title : '',
    rate : '',
    review : '',
    order_id : ''
  }
  constructor(private dataService : DataService,private router : Router , private updateReviewService : UpdateReviewService) { }

  ngOnInit() {
    this.dataService.currentUser.subscribe(user=> this.user=user);
    this.dataService.currentToUpdateReview.subscribe(review => this.data= review);
  }

  onSubmit(){
    console.log(this.data);
    
    this.updateReviewService.updateReview(this.data).subscribe(msg=>{ console.log(msg)
      if(msg==1){
        alert("update success");
        this.router.navigate(['reviews']);
      } 
    });
    
  }

}
