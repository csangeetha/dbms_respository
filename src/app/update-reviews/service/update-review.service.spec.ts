import { TestBed, inject } from '@angular/core/testing';

import { UpdateReviewService } from './update-review.service';

describe('UpdateReviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateReviewService]
    });
  });

  it('should be created', inject([UpdateReviewService], (service: UpdateReviewService) => {
    expect(service).toBeTruthy();
  }));
});
