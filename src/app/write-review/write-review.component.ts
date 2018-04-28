import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ReviewService } from '../review/service/review.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.scss'],
  providers : [ReviewService]
})
export class WriteReviewComponent implements OnInit {
  orderId:any;
  data ={
    title:'',
    review: '',
    rating :''
  }
  constructor(private activatedRoute: ActivatedRoute, private reviewService: ReviewService,private router : Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res =>{ this.orderId = res.order_id; console.log(this.orderId);
     });
  }

  onSubmit(){
    console.log(this.data);
    if(this.data.review!=''&&this.data.rating!=''&&this.data.title!=''){
      this.reviewService.createReview(this.data,this.orderId).subscribe((msg:any) => {alert("review created, check reviews"); })
    }
    else {
      alert("please fill all blanks");
    }
    
  }

}
