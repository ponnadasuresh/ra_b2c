import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlSubscriptionplanComponent } from './nl-subscriptionplan.component';

describe('NlSubscriptionplanComponent', () => {
  let component: NlSubscriptionplanComponent;
  let fixture: ComponentFixture<NlSubscriptionplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlSubscriptionplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlSubscriptionplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
