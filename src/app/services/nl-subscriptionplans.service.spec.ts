import { TestBed } from '@angular/core/testing';

import { NlSubscriptionplansService } from './nl-subscriptionplans.service';

describe('NlSubscriptionplansService', () => {
  let service: NlSubscriptionplansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NlSubscriptionplansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
