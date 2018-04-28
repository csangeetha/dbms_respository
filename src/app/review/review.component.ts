import { Component, OnInit } from '@angular/core';
import { ReviewService } from './service/review.service';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  providers:[ReviewService]
})
export class ReviewComponent implements OnInit {
reviews: any;
user:any;
adminReviews:any;
  constructor(private reviewService: ReviewService, private dataService: DataService,private router : Router) { }

  ngOnInit() {
    this.dataService.currentUser.subscribe(user => {this.user=user;
      if(user.type=='customer'){
      this.getReviews(user);}
      if(user.type=='admin'){
        this.getAllReviews();
      }
    })
  }

  getReviews(user){
    this.reviewService.getAllReviews(user.userId).subscribe(reviews => this.reviews=reviews)
  }
  getAllReviews(){
    this.reviewService.getAllReviewsAsAdmin().subscribe(reviews => this.adminReviews=reviews)
  }

  deleteReview(reviewId){
    console.log(reviewId);
    this.reviewService.deleteReview(reviewId).subscribe(msg => {console.log(msg)
       if(this.user.type=='customer'){
      this.getReviews(this.user);}
      if(this.user.type=='admin'){
        this.getAllReviews();
      }
    });
  }

  updateReview(review){
    this.dataService.changeUpdateReview(review);
    this.router.navigate(['update-review'])
  }

}
