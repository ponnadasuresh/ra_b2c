import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlSubscriptionConformationComponent } from './nl-subscription-conformation.component';

describe('NlSubscriptionConformationComponent', () => {
  let component: NlSubscriptionConformationComponent;
  let fixture: ComponentFixture<NlSubscriptionConformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlSubscriptionConformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NlSubscriptionConformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
