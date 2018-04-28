import { TestBed, inject } from '@angular/core/testing';

import { UpdatePhoneService } from './update-phone.service';

describe('UpdatePhoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdatePhoneService]
    });
  });

  it('should be created', inject([UpdatePhoneService], (service: UpdatePhoneService) => {
    expect(service).toBeTruthy();
  }));
});
