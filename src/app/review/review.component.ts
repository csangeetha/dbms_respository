import { Component, OnInit } from '@angular/core';
import { ReviewService } from './service/review.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  providers:[ReviewService]
})
export class ReviewComponent implements OnInit {
reviews: any;
user:any;
  constructor(private reviewService: ReviewService, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentUser.subscribe(user => {this.user=user;
      this.getAllReviews(user);
    })
  }

  getAllReviews(user){
    this.reviewService.getAllReviews(user.userId).subscribe(reviews => this.reviews=reviews)
  }

  deleteReview(reviewId){
    console.log(reviewId);
    this.reviewService.deleteReview(reviewId).subscribe(msg => {console.log(msg)
      this.getAllReviews(this.user);
    });
  }

}
