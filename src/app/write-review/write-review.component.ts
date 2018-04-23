import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ReviewService } from '../review/service/review.service';

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
  constructor(private activatedRoute: ActivatedRoute, private reviewService: ReviewService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res =>{ this.orderId = res.order_id; console.log(this.orderId);
     });
  }

  onSubmit(){
    console.log(this.data);
    if(this.data.review!=''&&this.data.rating!=''&&this.data.title!=''){
      this.reviewService.createReview(this.data,this.orderId).subscribe((msg:any) => {alert("reviewid :"+ msg.id)})
    }
    else {
      alert("please fill all blanks");
    }
    
  }

}
