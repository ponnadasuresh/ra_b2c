import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlSubscriptionformComponent } from './nl-subscriptionform.component';

describe('NlSubscriptionformComponent', () => {
  let component: NlSubscriptionformComponent;
  let fixture: ComponentFixture<NlSubscriptionformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlSubscriptionformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlSubscriptionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
